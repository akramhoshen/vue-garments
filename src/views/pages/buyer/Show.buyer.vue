<script setup>
import { ref, onMounted } from 'vue';
import Http from '@/utils/http';
import { getCurrentPath } from '@/utils/routerUtils';
import Breadcrumb from '@/components/Breadcrumb.vue';

//store the fetched items
const items = ref([]);

// fetch items from the API
async function fetchItems() {
  try {
    const response = await Http.get('/buyers');
    items.value = response.data;
    // console.log(response.data)
  } catch (error) {
    console.error('Error fetching items:', error);
  }
}

// Call fetchItems function
onMounted(fetchItems);

// store the current path
const currentPath = ref('');

// Update the current path
onMounted(() => {
  currentPath.value = getCurrentPath();
});

// Data properties
const name = ref('');
const mobile = ref('');
const email = ref('');
const address = ref('');
const photo = ref(null);
console.log(photo)

// Function to create a new item
const createItem = async () => {
  try {
    const response = await Http.post('/buyers', {
      name: name.value,
      mobile: mobile.value,
      email: email.value,
      address: address.value,
      photo: photo.value,
    });
    console.log('Item created:', response.data);
    
    // Add the newly created
    items.value.push(response.data);
    
    // Clear the input fields
    name.value = '';
    mobile.value = '';
    email.value = '';
    address.value = '';
    
    // Close the modal after
    $("#modalId").modal('hide');
  } catch (error) {
    console.error('Error creating item:', error);
  }
};

// Handle file change
const handleFileChange = (event) => {
  const selectedFile = event.target.files[0];
  // Do whatever you need to do with the selected file
  // console.log(selectedFile);
  // Assign the selected file to the photo ref
  photo.value = selectedFile;
};
</script>

<template>
  <!-- Breadcrumb start -->
    <Breadcrumb/>
  <!-- Breadcrumb end -->

  <div class="app-body">
    
    <div class="card">
    <div style="background-color: #f1f5f9; padding: 12px 16px;" class="card-header d-flex justify-content-between align-items-center border-bottom">
      <div style="font-size: 20px; color: #012970; font-weight: 500;" class="flex-fill">
        {{ currentPath }}
      </div>
      <button type="button" class="btn btn-success my-primary-btn" data-bs-toggle="modal" data-bs-target="#modalId">
        Add Buyer
      </button>
    </div>
    <div class="card-body">

      <!-- Table Data -->
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>Photo</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="buyer in items" :key="buyer.id">
            <td>{{ buyer.id }}</td>
            <td>{{ buyer.name }}</td>
            <td>{{ buyer.mobile }}</td>
            <td>{{ buyer.email }}</td>
            <td>{{ buyer.address }}</td>
            <td><img :src="'http://localhost/Laravel-Practice-ERP/public/img/'+ buyer.photo" alt="" width="80"></td>
            <td>
              <div class="btn-group" role="group">
                <button style="background: #0fb9b1; color: #fff;" class="btn" @click="handleView(1)"> <i class="bi bi-eye-fill" />
                </button>
                <button style="background: #3867d6; color: #fff;" class="btn" @click="handleEdit(1)"> <i class="bi bi-pencil-square" />
                </button>
                <button style="background: #eb3b5a; color: #fff;" class="btn rounded-start-0" @click="handleDelete(1)"> <i class="bi bi-trash-fill" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Modal Body -->
      <div class="modal fade" id="modalId" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalTitleId">Add New Buyer</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" ria-label="Close" ></button>
                </div>
                <form @submit.prevent="createItem">
                  <div class="modal-body">
                      <div class="container-fluid">
                          <div class="row mb-3">
                              <label for="name" class="col-sm-2 col-form-label">Name</label>
                              <div class="col-sm-10">
                                  <input type="text" class="form-control" name="name" id="name" v-model="name" value="" placeholder="">
                              </div>
                          </div>

                          <div class="row mb-3">
                              <label for="mobile" class="col-sm-2 col-form-label">Mobile</label>
                              <div class="col-sm-10">
                                  <input type="text" class="form-control" name="mobile" id="mobile" v-model="mobile" value="" placeholder="">
                              </div>
                          </div>

                          <div class="row mb-3">
                              <label for="email" class="col-sm-2 col-form-label">Email</label>
                              <div class="col-sm-10">
                                  <input type="text" class="form-control" name="email" id="email" v-model="email" value="" placeholder="">
                              </div>
                          </div>

                          <div class="row mb-3">
                              <label for="address" class="col-sm-2 col-form-label">Address</label>
                              <div class="col-sm-10">
                                  <input type="text" class="form-control" name="address" id="address" v-model="address" value="" placeholder="">
                              </div>
                          </div>

                          <div class="row mb-3">
                              <label for="photo" class="col-sm-2 col-form-label">Photo</label>
                              <div class="col-sm-10">
                                  <input type="file" class="form-control" name="photo" id="photo" @change="handleFileChange" value="" placeholder="">
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
                      <button type="submit" class="btn btn-primary">Save</button>
                  </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped>
</style>
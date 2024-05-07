<script setup>
import { ref, onMounted,reactive } from 'vue';
import Http from '@/utils/http';
import { getCurrentPath } from '@/utils/routerUtils';
import getImg from '@/utils/imgHttp';
import { Bootstrap5Pagination } from 'laravel-vue-pagination';
import Breadcrumb from '@/components/Breadcrumb.vue';

//---Page Header Start---//

// store current path
const currentPath = ref('');

// Update current path
onMounted(() => {
  currentPath.value = getCurrentPath();
});

//---Page Header End---//

//store fetched data
const buyers = ref([]);
const errors = ref([]);
const buyer_id = ref([]);
const photoKey = ref(0);

const formData = reactive({
  name:'',
  mobile:'',
  email:'',
  address:'',
  photo:null,
});

const formDataReset = () =>{
  errors.value = '';
  buyer_id.value = '';
  formData.name = '';
  formData.mobile = '';
  formData.email = '';
  formData.address = '';
  formData.photo = null;
  photoKey.value++; // photoKey to force re-render
}

const getData = async(page = 1) =>{
  try {
    const res = await Http.get(`buyers?page=${page}`);
    buyers.value = res.data;
    // console.log(res.data)
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

const storeData = async() =>{
  try {
    const res = await Http.post('/buyers', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(res.data)
    //show update data
    getData()
    formDataReset()
    // Close the modal
    $("#modalId").modal('hide');
  } catch (e) {
    if(e.response.status == 422){
      let data = [];
      for(const key in e.response.data.errors){
        data.push(e.response.data.errors[key][0]);
      }
      errors.value = data;
    }
  }
}

const updateData = async () => {
  try {
    const res = await Http.post(`buyers/update/${buyer_id.value}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(res.data)
    //show update data
    getData();
    formDataReset();
    // Close the modal
    $("#modalId").modal('hide');
  } catch (e) {
    if (e.response.status == 422) {
      let data = [];
      for (const key in e.response.data.errors) {
        data.push(e.response.data.errors[key][0]);
      }
      errors.value = data;
    }
  }
}

const handleEdit = (buyer) =>{
  buyer_id.value = buyer.id;
  formData.name = buyer.name;
  formData.mobile = buyer.mobile;
  formData.email = buyer.email;
  formData.address = buyer.address;
}

const handleView = (buyer) => {
  buyer_id.value = buyer.id;
  formData.name = buyer.name;
  formData.mobile = buyer.mobile;
  formData.email = buyer.email;
  formData.address = buyer.address;
  formData.photo = buyer.photo;
  // Open modal
  $("#viewModal").modal('show');
}

const handleDelete = (id) => {
    buyer_id.value = id;
    // Open modal
    $("#deleteConfirmationModal").modal("show");
};

const confirmDelete = async () =>{
  const res = await Http.delete(`buyers/${buyer_id.value}`);
  console.log(res.data)
  getData();
  buyer_id.value = '';
  // Hide modal
  $("#deleteConfirmationModal").modal("hide");
}

// Call getBuyer
onMounted(getData);

// Handle file change
const handleFileChange = (event) => {
  let selectedFile = event.target.files[0];
  formData.photo = selectedFile;
};

// selectedTaskFile(e) {
//   let file = e.target.files[0];
//   let reader = new FileReader();
//   reader.onloadend = () => {
//     this.taskData.task_file = reader.result;
//   }
//   reader.readAsDataURL(file);
// }
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
      <button @click="formDataReset" type="button" class="btn btn-success my-primary-btn" data-bs-toggle="modal" data-bs-target="#modalId">
        Add New Buyer
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
        <tbody class="table-group-divider">
          <tr v-for="buyer in buyers.data" :key="buyer.id">
            <td>{{ buyer.id }}</td>
            <td>{{ buyer.name }}</td>
            <td>{{ buyer.mobile }}</td>
            <td>{{ buyer.email }}</td>
            <td>{{ buyer.address }}</td>
            <td><img :src="getImg(buyer.photo)" alt="" width="80"></td>
            <!-- <td><img :src="getImgPath + buyer.photo" alt="" width="80"></td> -->
            <td>
              <div class="btn-group" role="group">
                <button style="background: #0fb9b1; color: #fff;" class="btn" @click="handleView(buyer)">
                  <i class="bi bi-eye-fill" />
                </button>
                <button style="background: #3867d6; color: #fff;" class="btn" @click="handleEdit(buyer)" data-bs-toggle="modal" data-bs-target="#modalId">
                  <i class="bi bi-pencil-square" />
                </button>
                <button style="background: #eb3b5a; color: #fff;" class="btn rounded-start-0" @click="handleDelete(buyer.id)">
                  <i class="bi bi-trash-fill" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Main Modal -->
      <div class="modal fade" id="modalId" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 v-if="buyer_id == ''" class="modal-title" id="modalTitleId">Add New Buyer</h5>
                    <h5 v-else class="modal-title" id="modalTitleId">Update Buyer</h5>
                    <button @click="formDataReset" type="button" class="btn-close" data-bs-dismiss="modal" ria-label="Close" ></button>
                </div>
                <div class="modal-body">
                  <div class="container-fluid">
                    <div class="row mb-3">
                      <div class="text-sm text-danger" v-if="errors != ''">
                        <p v-for="error in errors" :key="error">
                          <small>{{error}}</small>
                        </p>
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="name" class="col-sm-2 col-form-label">Name</label>
                      <div class="col-sm-10">
                        <input type="text" class="form-control" name="name" id="name" v-model="formData.name" value="" placeholder="">
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="mobile" class="col-sm-2 col-form-label">Mobile</label>
                      <div class="col-sm-10">
                        <input type="text" class="form-control" name="mobile" id="mobile" v-model="formData.mobile" value="" placeholder="">
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="email" class="col-sm-2 col-form-label">Email</label>
                      <div class="col-sm-10">
                        <input type="text" class="form-control" name="email" id="email" v-model="formData.email" value="" placeholder="">
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="address" class="col-sm-2 col-form-label">Address</label>
                      <div class="col-sm-10">
                        <input type="text" class="form-control" name="address" id="address" v-model="formData.address" value="" placeholder="">
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="photo" class="col-sm-2 col-form-label">Photo</label>
                      <div class="col-sm-10">
                        <input type="file" class="form-control" name="photo" id="photo" :key="photoKey" @change="handleFileChange" value="" placeholder="">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button @click="formDataReset" type="button" class="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
                  <button v-if="buyer_id == ''" type="button" class="btn btn-primary" @click="storeData">Save</button>
                  <button v-else type="button" class="btn btn-primary" @click="updateData">Update</button>
                </div>
            </div>
        </div>
      </div>

      <!-- View Modal -->
      <div class="modal fade" id="viewModal" tabindex="-1" role="dialog" aria-labelledby="viewModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="viewModalLabel">View Buyer Details</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="formDataReset"></button>
            </div>
            <div class="modal-body">
              <div class="container-fluid">
                <div class="row mb-3">
                  <strong class="col-sm-3">ID:</strong>
                  <div class="col-sm-9">{{ buyer_id }}</div>
                </div>
                <div class="row mb-3">
                  <strong class="col-sm-3">Name:</strong>
                  <div class="col-sm-9">{{ formData.name }}</div>
                </div>
                <div class="row mb-3">
                  <strong class="col-sm-3">Mobile:</strong>
                  <div class="col-sm-9">{{ formData.mobile }}</div>
                </div>
                <div class="row mb-3">
                  <strong class="col-sm-3">Email:</strong>
                  <div class="col-sm-9">{{ formData.email }}</div>
                </div>
                <div class="row mb-3">
                  <strong class="col-sm-3">Address:</strong>
                  <div class="col-sm-9">{{ formData.address }}</div>
                </div>
                <div class="row mb-3">
                  <strong class="col-sm-3">Photo:</strong>
                  <div class="col-sm-9">
                    <img :src="getImg(formData.photo)" alt="Buyer Photo" width="200">
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="formDataReset">Close</button>
            </div>
          </div>
        </div>
      </div>
      <!-- End of View Buyer Modal -->

      <!-- Delete Confirmation Modal -->
      <div class="modal fade" id="deleteConfirmationModal" tabindex="-1" aria-labelledby="deleteConfirmationModalLabel" aria-hidden="true">
          <div class="modal-dialog">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title" id="deleteConfirmationModalLabel">Confirm Deletion</h5>
                      <button @click="formDataReset" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                      Are you sure you want to delete this?
                  </div>
                  <div class="modal-footer">
                      <button @click="formDataReset" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                      <button type="button" class="btn btn-danger" @click="confirmDelete">Delete</button>
                  </div>
              </div>
          </div>
      </div>

    </div>
    <div class="card-footer border-top">
      <Bootstrap5Pagination class="m-0" :data="buyers" @pagination-change-page="getData"/>
    </div>
  </div>
  </div>
</template>

<style scoped>
th{
  font-weight: bold !important;
}
.card-footer {
  padding: 12px 16px!important;
}
</style>
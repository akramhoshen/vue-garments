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
    const response = await Http.get('/buyers'); // Use relative URL
    items.value = response.data;
    console.log(response.data)
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
        Manage Buyer
      </button>
    </div>
    <div class="card-body">
    
      <!-- Modal Body -->
      <div class="modal fade" id="modalId" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalTitleId">Add Buyer</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" ria-label="Close" ></button>
                </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <div class="row mb-3">
                            <label for="name" class="col-sm-2 col-form-label">Name</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" name="name" id="name" value="" placeholder="">
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="mobile" class="col-sm-2 col-form-label">Mobile</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" name="mobile" id="mobile" value="" placeholder="">
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="email" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" name="email" id="email" value="" placeholder="">
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="address" class="col-sm-2 col-form-label">Address</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" name="address" id="address" value="" placeholder="">
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="photo" class="col-sm-2 col-form-label">Photo</label>
                            <div class="col-sm-10">
                                <input type="file" class="form-control" name="photo" id="photo" value="" placeholder="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
                    <button type="button" class="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
      </div>
      
    </div>
  </div>
  </div>
</template>

<style scoped>
</style>
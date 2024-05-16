<script setup>
import { ref, onMounted,reactive } from 'vue';
import Http from '@/utils/http';
import { getCurrentPath } from '@/utils/routerUtils';
import Breadcrumb from '@/components/Breadcrumb.vue';

//---Page Header Start---//

// store current path
const currentPath = ref('');

// Update current path
onMounted(() => {
  currentPath.value = getCurrentPath();
});

//---Page Header End---//

// Define reactive variables
    const remark = ref('');
    const warehouse_id = ref('');
    const vendor_id = ref('');
    const purchase_date = ref('');
    const delivery_date = ref('');
    const purchase_status_id = ref('');

    const rawmaterials = ref([]);
    const warehouses = ref([]);
    const vendors = ref([]);
    const statuses = ref([]);

    const items = ref([]);

    const price = ref(0);
    const qty = ref(0);
    const discount = ref(0);
    const rawitems = ref('');
    const paidAmount = ref(0);
    const dueAmount = ref(0);

    // Fetch data from API
    const getData = async () => {
      try {
        const rawMaterial = await Http.get('rawmaterials');
        rawmaterials.value = rawMaterial.data;
        console.log(rawMaterial.data)

        const vendor = await Http.get('vendors');
        vendors.value = vendor.data;
        console.log(vendor.data)

        const warehouse = await Http.get('warehouses');
        warehouses.value = warehouse.data;
        console.log(warehouse.data)

        const statusres = await Http.get('pstatus');
        statuses.value = statusres.data;
        console.log(statusres.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Fetch data on component mount
    onMounted(() => {
        getData();
    });

</script>

<template>
<!-- Breadcrumb start -->
    <Breadcrumb/>
<!-- Breadcrumb end -->
<div class="app-body">
    <div class="card">
        <div style="background-color: #f1f5f9; padding: 12px 16px;" class="card-header">
            <div class="w-100 d-flex justify-content-between align-items-end">
                <h4 class="color-primary">{{ currentPath }}</h4>
                <RouterLink :to="{ name: 'Manage Purchase'}" class="btn btn-lg btn-primary rounded"><i class="fas fa-wrench mr-1"></i> Manage Purchase</RouterLink>
            </div>
        </div>
        <div class="text-center mt-3">
            <h3 class="color-primary text-center mb-0">STRIPE</h3>
            <h4 class="">Inventory Purchase</h4>
        </div>
        <hr />

        <div class="card-body">
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="mb-2">
                        <label>Vendor</label>
                        <div class="">
                            <select name="vendor" v-model="vendor_id" class="form-control">
                                <option value="" disabled selected>Select Vendor</option>
                                <option v-for="vendor in vendors" :key="vendor.id" :value="vendor.id">{{ vendor.organization }}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="mb-2">
                        <label>Purchase Status</label>
                        <div class="">
                            <select name="status" v-model="purchase_status_id" class="form-control">
                                <option value="" disabled selected>Select Status</option>
                                <option v-for="status in statuses" :key="status.id" :value="status.id">{{ status.name }}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="mb-2">
                        <label>Warehouse</label>
                        <div class="">
                            <select name="warehouse" v-model="warehouse_id" class="form-control">
                                <option value="" disabled selected>Select WareHouse</option>
                                <option v-for="house in warehouses" :key="house.id" :value="house.id">{{ house.name }}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="mb-2">
                        <label for="purchase_date" class="">Purchase Order Date</label>
                        <div class=""><input type="date" v-model="purchase_date" class="form-control" name="purchase_date" id="purchase_date" value="" placeholder="" /></div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="mb-2">
                        <label for="delivery_date" class="">Delivery Date</label>
                        <div class=""><input type="date" v-model="delivery_date" class="form-control" name="delivery_date" id="delivery_date" value="" placeholder="" /></div>
                    </div>
                </div>
            </div>
            <!-- <hr> -->
            <div class="p-3 bg-light border rounded">
                <h6 class="color-primary">Add Raw Material</h6>
                <div class="row">
                    <div class="col-md-12">
                        <div class="mb-2">
                            <label>Raw Material</label>
                            <div class="">
                                <select name="rawitems" v-model="rawitems" class="form-control">
                                    <option value="" disabled selected>Select RawMaterials</option>
                                    <option v-for="raw in rawmaterials" :key="raw.id" :value="raw.id" selected>{{ raw.name }}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="mb-2">
                            <label for="txtPrice" class="">Price</label>
                            <div class=""><input type="text" class="form-control" name="txtPrice" id="txtPrice" value="" placeholder="" /></div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="mb-2">
                            <label for="txtQuantity" class="">Quantity</label>
                            <div class=""><input type="text" class="form-control" name="txtQuantity" id="txtQuantity" value="" placeholder="" /></div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="mb-2">
                            <label for="txtDiscount" class="">Discount</label>
                            <div class=""><input type="text" class="form-control" name="txtDiscount" id="txtDiscount" value="0" placeholder="" /></div>
                        </div>
                    </div>
                    <div class="col mb-2">
                        <input type="button" id="btnAddToCart" name="btnAddToCart" class="btn btn-sm btn-outline-dark" value="Add item" />
                        <input type="button" id="clearAll" class="btn btn-sm btn-outline-danger" value="Empty" />
                    </div>
                </div>
                <table class="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>SL</th>
                            <th>Item</th>
                            <th class="text-right">Price</th>
                            <th class="text-center">Quantity</th>
                            <th class="text-right">Discount</th>
                            <th class="text-right">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody id="items">
                        <tr>
                            <td><input type="button" class="delete btn btn-sm btn-outline-danger py-0 px-2 rounded-circle" data-id="1" value="x" /></td>
                            <td>1</td>
                            <td>ST123-F-Blue mosaic pattern</td>
                            <td data-field="price" class="text-right">999</td>
                            <td data-field="qty" class="text-center">null</td>
                            <td data-field="discount" class="text-right">0</td>
                            <td data-field="subtotal" class="text-right">null</td>
                        </tr>
                        <tr>
                            <td><input type="button" class="delete btn btn-sm btn-outline-danger py-0 px-2 rounded-circle" data-id="3" value="x" /></td>
                            <td>2</td>
                            <td>ST123-T-Brand label</td>
                            <td data-field="price" class="text-right"></td>
                            <td data-field="qty" class="text-center">1</td>
                            <td data-field="discount" class="text-right">0</td>
                            <td data-field="subtotal" class="text-right">0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <hr />
            <div class="row">
                <div class="col-lg-5 order-lg-1 order-2">
                    <div class="mb-2">
                        <label for="txtRemark" class="">Remarks</label>
                        <div class=""><input type="text" class="form-control" name="txtRemark" id="txtRemark" value="" placeholder="" /></div>
                    </div>
                </div>
                <div class="col-lg-6 order-lg-2 order-1 ml-auto bg-light">
                    <table class="table table-striped text-right">
                        <tfoot>
                            <tr>
                                <th>Subtotal</th>
                                <th><input type="text" class="form-control form-control-sm text-right" name="txtSubtotal" id="txtSubtotal" value="0" /></th>
                            </tr>
                            <tr class="d-none">
                                <th></th>
                                <th><input type="text" class="form-control form-control-sm text-right" name="discount" id="discount" value="0" /></th>
                            </tr>
                            <tr>
                                <th>VAT</th>
                                <th><input type="text" class="form-control form-control-sm text-right" name="txtVat" id="txtVat" value="0" /></th>
                            </tr>
                            <tr>
                                <th>Paid Amount</th>
                                <th><input type="text" class="form-control form-control-sm text-right" name="txtPaidAmount" id="txtPaidAmount" value="0" /></th>
                            </tr>
                            <tr>
                                <th>Due Amount</th>
                                <th><input type="text" class="form-control form-control-sm text-right text-danger" name="txtDueAmount" id="txtDueAmount" value="0" /></th>
                            </tr>
                            <tr>
                                <th>Total</th>
                                <th><input type="text" class="form-control form-control-sm text-right h6" name="txtTotalAmount" id="txtTotalAmount" value="0" /></th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
        <div class="card-footer border-top">
            <input type="button" value="Create" name="btnProcessOrder" id="btnProcessOrder" class="btn btn-info" />
        </div>
    </div>
</div>

</template>

<style scoped>

</style>
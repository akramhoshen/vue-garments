<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue';
import Visitor from '@/components/cards/Visitor.card.vue';
import Sales from '@/components/cards/Sales.card.vue';
import Income from '@/components/cards/Income.card.vue';
import Review from '@/components/cards/Review.card.vue';
import Report from '@/components/chart/Report.chart.vue';
import SalesChart from '@/components/chart/Sales.chart.vue';
import RevenueChart from '@/components/chart/Revenue.chart.vue';
import PaymentChart from '@/components/chart/Payment.chart.vue';
import IncomeChart from '@/components/chart/Income.chart.vue';
import DealsChart from '@/components/chart/Deals.chart.vue';
import Buyers from '@/components/cards/Buyers.card.vue';
import Message from '@/components/cards/Message.card.vue';
import Transactions from '@/components/cards/Transactions.card.vue';
</script>

<template>

  <Breadcrumb/>

  <div class="app-body">

    <!-- Row starts -->
    <div class="row">
        <div class="col-xxl-3 col-sm-6 col-12">
          <Visitor/>
        </div>
        <div class="col-xxl-3 col-sm-6 col-12">
          <Sales/>
        </div>
        <div class="col-xxl-3 col-sm-6 col-12">
          <Income/>
        </div>
        <div class="col-xxl-3 col-sm-6 col-12">
          <Review/>
        </div>
      </div>
      <!-- Row ends -->

      <!-- Row starts -->
      <div class="row">
        <div class="col-xxl-12">
          <Report/>
        </div>
      </div>
      <!-- Row end -->

      <!-- Row start -->
      <div class="row">
        <div class="col-sm-3 col-12">
          <SalesChart/>
        </div>
        <div class="col-sm-3 col-12">
          <RevenueChart/>
        </div>
        <div class="col-sm-3 col-12">
          <PaymentChart/>
        </div>
        <div class="col-sm-3 col-12">
          <IncomeChart/>
        </div>
      </div>
      <!-- Row end -->

      <!-- Row start -->
      <div class="row">
        <div class="col-xxl-12">
          <Buyers/>
        </div>
      </div>
      <!-- Row end -->

      <!-- Row start -->
      <div class="row">
        <div class="col-xl-4 col-sm-6 col-12">
          <Message/>
        </div>
        <div class="col-xl-4 col-sm-6 col-12">
          <DealsChart/>
        </div>
        <div class="col-xl-4 col-sm-12 col-12">
          <Transactions/>
        </div>
      </div>
      <!-- Row end -->
  </div>
</template>

<style scoped>
</style>
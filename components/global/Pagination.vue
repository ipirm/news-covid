<template>
  <div class="pagination" v-show="totalElems > perPage">
    <button class="pagination__button-left" @click="changePage(page-1)" :disabled="page == 1">
      <!-- TODO: добавить свг штукенцию + сделать так чтобы когда page == 1, то он будет серый (#535353), else синий (#120888) (NOTICE: оставь style, чтобы он показывал налево (а так будет только один svg file, который показывает направо)) -->
      <img alt="Назад" v-show="page == 1" src="~/static/svg/pagination-right-inactive.svg" style="transform: scaleX(-1);">
      <img alt="Назад" v-show="page > 1" src="~/static/svg/pagination-right-inactive.svg" style="transform: scaleX(-1);">
    </button>
    <button class="pagination__button" @click="changePage(1)" :class="{ 'current': page == 1 }" :disabled="page == 1">
      <span>1</span>
    </button>
    <button class="pagination__button" v-for="(button,i) in buttons" :key="`pagination-${i}`" @click="changePage(button)" :class="{ 'three-dots': button == '. . .', 'current': button == page }" :disabled="button == '. . .' || button == page">
      <span>{{ button }}</span>
    </button>
    <button class="pagination__button" @click="changePage(lastPage)" :class="{ 'current': page == lastPage }" :disabled="page == lastPage">
      <span>{{ lastPage }}</span>
    </button>
    <button class="pagination__button-right" @click="changePage(page+1)" :disabled="page == lastPage">
      <!-- TODO: добавить свг штукенцию + сделать так чтобы когда page == 1, то он будет серый (#535353), else синий (#120888) -->
      <img alt="Вперед" v-show="page == lastPage" src="~/static/svg/pagination-right-inactive.svg">
      <img alt="Вперед" v-show="page < lastPage" src="~/static/svg/pagination-right-inactive.svg">
    </button>
  </div>
</template>

<script>
export default {
  props: [ 'perPage', 'totalElems', 'curPage' ],

  model: {
    prop: 'page',
    event: 'change'
  },

  watch: {
    curPage(n,o) {
      this.generatePagination(n);
    },

    totalElems(n,o) {
      this.generatePagination(this.curPage);
    }
  },

  mounted() {
    this.generatePagination(this.curPage);
  },

  data() {
    return {
      page: 1,
      buttons: [] // only consists of the middle numbers and ...
    }
  },

  computed: {
    lastPage() {
      return Math.ceil(this.totalElems / this.perPage);
    }
  },

  methods: {
    init() {
      this.generatePagination(this.curPage);
    },

    changePage(p) {
      if (p > 0 && p < this.lastPage + 1) {
        this.page = p;
        this.$emit('change', p);
        this.$bus.$emit('pageChanged', p);
      }
    },

    generatePagination(p) {
      this.buttons = [];
      if (this.lastPage == 2) return;

      if (p == 1) p = 2;
      else if (p == this.lastPage) p = this.lastPage - 1;

      if (p - 2 > 1)
        this.buttons.push('...');
      if (p - 1 > 1)
        this.buttons.push(p - 1);
      if (p != 1 && p != this.lastPage); // Math.ceil(totalElems / perPage) is the last page
        this.buttons.push(p);
      if (p + 1 < this.lastPage)
        this.buttons.push(p + 1);
      if (p + 2 < this.lastPage)
        this.buttons.push('...');
    }
  }
}
</script>

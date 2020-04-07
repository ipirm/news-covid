import Vue from 'vue';


Vue.filter('truncate', function truncate(string, value) {
    if (!value || string.length < value) return string
    return (string || '').substring(0, value) + '…'
});

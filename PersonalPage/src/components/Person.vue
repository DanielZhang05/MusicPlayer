<template>
    <div class="person">
        <h2>Name: {{ name }} </h2>
        <h2>Age: {{ age }}</h2>
        <button @click="showTel">Check telephone</button>
    </div>
</template>


<script lang="ts">
export default {
    name: "Person",
    data(): { name: string; age: number; tel: string } {
        return {
            name: "Zhang",
            age: 20,
            tel: "3133333"
        };
    },
    methods: {
        showTel() {
            alert(this.tel);
        }
    }
};
</script>

<style scoped>

</style>
<template>
    <div class="container mt-5"> 
        <div class="card">
            <div class="card-header">
                <h4>Agregar personal</h4>
            </div>
            <div v-if="mensaje == 1" class="alert alert-succes" role="alert">
                Datos agregados con éxito
            </div>
            <div class="card-body">
                <div class="mb-3">
                    Nombre
                    <input type="text" class="form-control" v-model="personal.nombre">
                </div>
                <div class="mb-3">
                    Dirección
                    <input type="text" class="form-control" v-model="personal.direccion"
                </div>
                <div class="mb-3">
                    Telefono
                    <input type="text" class="form-control" v-model="personal.telefono">
                </div>
                <div class="mb-3">
                    Estatus
                    <input type="text" class="form-control" v-model="personal.estatus">
                </div>
                <div class="mb-3">
                    <button class="btn btn-primary" @click="agregarPersonal(personal)">Agregar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { PersonalAgregar } from '../interfaces/personal-interface';
import { usePersonal } from '../controladores/usePersonal';

const { agregarPersonal,mensaje } = usePersonal();

    let personal = ref<PersonalAgregar>({
        nombre: '',
        direccion: '',
        telefono: '',
        estatus: 0
    })
</script>

<style scoped>

</style>
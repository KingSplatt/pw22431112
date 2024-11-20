import { ref } from "vue"
import type { Personal, PersonalAgregar } from "../interfaces/personal-interface"
import personalApi from "../api/personalAPI"

export const usePersonal = () => {
    const personal = ref<Personal[]>([])

    const traePersonal = async () => {
        const respuesta = await personalApi.get<Personal[]>('/')
        personal.value = respuesta.data
        console.log(personal.value)
    }

    const agregarPersonal = async (personal: PersonalAgregar) => {
        const respuesta = await personalApi.post('/', personal)
        if (respuesta.data.affectedRows >= 1) {
            console.log('Personal agregado')
        }
        return {
            personal,
            traePersonal,
            agregarPersonal
        }

    }
}
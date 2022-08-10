<template>
<v-row class="px-3 mx-auto mt-4 justify-center">
    <v-col cols="6">
        <v-card class="mx-auto">
            <v-card-title dark class="justify-center">Empresas</v-card-title>
            <v-divider></v-divider>
            <v-data-table
                :headers="headers"
                :items="empresas"
                :disable-pagination="true"
                :hide-default-footer="true"
            >
            </v-data-table>
        </v-card>
    </v-col>
</v-row>
</template>

<script>
export default {
    data () {
        return {
            empresas: [
                {numero: 1, empresa: "Red Medica Vital"},
                {numero: 2, empresa: "Vital Mascotas"},
                {numero: 3, empresa: "Habitat Hotel"},
                {numero: 4, empresa: "Casa"},
                {numero: 5, empresa: "Certi Expres Pereira"},
                {numero: 6, empresa: "Certi Expres Estadio"},
                {numero: 7, empresa: "Certi Expres Motos"},
                {numero: 8, empresa: "Clínica Lasik"},
                {numero: 9, empresa: "Finca (Barbas)"},
            ],

            headers: [
                {text: "No.", sortable: "false", filterable: "false", value: "numero"},
                {text: "Movimientos empresas", sortable: "false", filterable: "false", value: "empresa"}
            ]
        }
    }
}
</script>
<template>
  <div>
    <v-row class="px-3 mx-auto mt-4 mb-4 justify-center">
      <v-btn small dark fab color="blue-grey" to="/empresas">
        <v-icon dark>mdi-home</v-icon>
      </v-btn>
    </v-row>

    <v-row class="px-3 mx-auto mt-6 mb-3 justify-center">
      <h2>Empresa - Agregar movimientos - 2022</h2>
    </v-row>

    <v-row class="px-3 mx-auto mt-3 justify-center">
      <h3><strong>Total ingresos: </strong> $0</h3>
    </v-row>

    <v-row class="px-3 mx-auto mt-3 justify-center">
      <h3><strong>Total gastos: </strong> $0</h3>
    </v-row>

    <v-row class="px-3 mx-auto mt-3 justify-center">
      <h3><strong>Diferencia: </strong> $0</h3>
    </v-row>

    <v-row class="px-3 mx-auto mt-3 mb-3 justify-center">
      <h3><strong>Diferencia CE con gastos: </strong> $0</h3>
    </v-row>

    <v-divider></v-divider>

    <v-row class="px-3 mx-auto justify-center">
      <v-col cols="6">
        <v-tabs
          v-model="tab"
          background-color="transparent"
          class="text-center"
          centered
          color="black"
        >
          <v-tab>Movimientos</v-tab>
          <v-tab>Gastos</v-tab>
          <v-tab>Ingresos</v-tab>
          <v-tab>Gastos por área</v-tab>
        </v-tabs>
        </v-col>
</v-row>
<v-row class="px-3 mx-auto justify-center">
        <v-tabs-items v-model="tab">
          <v-tab-item>
            <v-sheet color="white" rounded elevation="5" height="200" width="400">
              <v-sparkline
                :value="value1"
                color="blue"
                line-width="3"
                padding="10"
                auto-draw
                stroke-linecap="round"
              ></v-sparkline>
              <v-sparkline
                :value="value2"
                color="red"
                line-width="3"
                padding="10"
                auto-draw
                stroke-linecap="round"
              ></v-sparkline>
            </v-sheet>
          </v-tab-item>
        </v-tabs-items>
    </v-row>

    <div v-for="mes in meses" :key="mes.text">
      <v-row class="px-3 mx-auto mt-3 mb-3 justify-center">
        <h2>
          <strong>{{ mes.text }}</strong>
        </h2>
      </v-row>

      <!-- Gastos -->
      <v-row class="px-3 mx-auto mt-3 justify-center">
        <v-col cols="12" md="5" sm="5">
          <v-card class="mx-auto mt-4">
            <v-card-title class="justify-center grey darken-3 white--text">
              <span class="mr-16">Gastos de {{ mes.text }}</span>
              <v-spacer></v-spacer>
              <v-btn
                class="mt-4 mb-2"
                fab
                dark
                small
                depressed
                color="light-green"
                @click="gastosDialog = true"
              >
                <v-icon dark> mdi-plus </v-icon>
              </v-btn>
            </v-card-title>
            <v-divider></v-divider>
            <v-data-table :headers="headers" :items-per-page="5"></v-data-table>
            <v-divider></v-divider>
            <div class="mx-3"><strong>Gastos: </strong> $0</div>
            <div class="ml-3"><strong>Ingresos: </strong> $0</div>
            <div class="ml-3"><strong>Diferencia: </strong> $0</div>
            <div class="ml-3"><strong>Diferencia CE: </strong> $0</div>
          </v-card>
        </v-col>

        <!-- Ingresos -->
        <v-col cols="12" md="5" sm="5">
          <v-card class="mx-auto mt-4">
            <v-card-title class="justify-center grey darken-3 white--text">
              <span class="mr-16">Ingresos de {{ mes.text }}</span>
              <v-spacer></v-spacer>
              <v-btn
                class="mt-4 mb-2"
                fab
                dark
                small
                depressed
                color="light-green"
                @click="ingresosDialog = true"
              >
                <v-icon dark> mdi-plus </v-icon>
              </v-btn>
            </v-card-title>
            <v-divider></v-divider>
            <v-data-table :headers="headers" :items-per-page="5"></v-data-table>
            <v-divider></v-divider>
            <div class="mx-3"><strong>Gastos: </strong> $0</div>
            <div class="ml-3"><strong>Ingresos: </strong> $0</div>
            <div class="ml-3"><strong>Diferencia: </strong> $0</div>
            <div class="ml-3"><strong>Diferencia CE: </strong> $0</div>
          </v-card>
        </v-col>
      </v-row>
      <v-divider class="mt-5"></v-divider>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ingresosDialog: false,
      gastosDialog: false,
      tab: null,
      value1: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      value2: [7, 4, 7, 2, 9, 0, 1, 2, 4, 7, 7, 10, 1, 3, 5],
      meses: [
        { text: "Enero" },
        { text: "Febrero" },
        { text: "Marzo" },
        { text: "Abril" },
        { text: "Mayo" },
        { text: "Junio" },
        { text: "Julio" },
        { text: "Agosto" },
        { text: "Septiembre" },
        { text: "Octubre" },
        { text: "Noviembre" },
        { text: "Diciembre" },
      ],

      headers: [
        {
          text: "Código",
          sortable: "false",
          filterable: "false",
          value: "codigo",
        },

        {
          text: "Cuenta",
          sortable: "false",
          filterable: "false",
          value: "cuenta",
        },

        {
          text: "Concepto",
          sortable: "false",
          filterable: "false",
          value: "concepto",
        },

        {
          text: "TG",
          sortable: "false",
          filterable: "false",
          value: "tg",
        },

        {
          text: "Valor",
          sortable: "false",
          filterable: "false",
          value: "valor",
        },
      ],
    };
  },
};
</script>

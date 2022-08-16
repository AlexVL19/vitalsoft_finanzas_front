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

    <v-row class="px-3 mx-auto-mt-3 justify-center">
      <h3><strong>Total ingresos: </strong> $0</h3>
    </v-row>

    <v-row class="px-3 mx-auto-mt-3 justify-center">
      <h3><strong>Total gastos: </strong> $0</h3>
    </v-row>

    <v-row class="px-3 mx-auto-mt-3 justify-center">
      <h3><strong>Diferencia: </strong> $0</h3>
    </v-row>

    <v-row class="px-3 mx-auto-mt-3 mb-3 justify-center">
      <h3><strong>Diferencia CE con gastos: </strong> $0</h3>
    </v-row>

    <v-divider></v-divider>

    <!-- Gastos -->
    <v-row class="px-3 mx-auto mt-3 justify-center">
      <v-col cols="12" md="5" sm="5">
        <v-card class="mx-auto mt-4">
          <v-card-title class="justify-center grey darken-3 white--text">
            <span class="mr-16">Gastos de Mes</span>
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
        </v-card>
      </v-col>

      <!-- Ingresos -->
      <v-col cols="12" md="5" sm="5">
        <v-card class="mx-auto mt-4">
          <v-card-title class="justify-center grey darken-3 white--text">
            <span class="mr-16">Ingresos de Mes</span>
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
        </v-card>
      </v-col>
    </v-row>

    <v-row class="px-3 justify-center">
      <v-col cols="12">
        <v-dialog v-model="gastosDialog" width="500px" persistent>
          <v-card class="mx-auto justify-center">
            <v-card-title class="justify-center grey darken-3 white--text">
              <span class="mr-16">Agregar gasto</span>
              <v-spacer></v-spacer>
              <v-btn
                small
                class="red"
                depressed
                dark
                @click="gastosDialog = false"
              >
                <v-icon small>mdi-close</v-icon>
              </v-btn>
            </v-card-title>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>

    <v-row class="px-3 justify-center">
      <v-col cols="12">
        <v-dialog v-model="ingresosDialog" width="500px" persistent>
          <v-card class="mx-auto justify-center">
            <v-card-title class="justify-center grey darken-3 white--text">
              <span class="mr-16">Agregar ingreso</span>
              <v-spacer></v-spacer>
              <v-btn
                small
                class="red"
                depressed
                dark
                @click="ingresosDialog = false"
              >
                <v-icon small>mdi-close</v-icon>
              </v-btn>
            </v-card-title>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gastosDialog: false,
      ingresosDialog: false,
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

<template>
  <div>
    <v-row class="px-3 mx-auto mt-4 mb-4 justify-center">
      <v-btn small color="primary" to="/empresas">
        <v-icon dark>mdi-home</v-icon>
      </v-btn>
    </v-row>

    <v-row class="px-3 mx-auto mt-6 justify-center">
      <h2>Empresa - Agregar comprobantes - 2022</h2>
    </v-row>

    <v-row class="px-3 mx-auto mt-3 justify-center">
      <v-col cols="4">
        <v-card class="mx-auto mt-4 justify-center">
          <v-card-title class="justify-center grey darken-3 white--text">
            <span class="mr-16">Mes</span>
            <v-spacer></v-spacer>
            <v-btn
              class="mt-4 mb-2"
              fab
              dark
              small
              depressed
              color="light-green"
              @click="comprobanteDialog = true"
            >
              <v-icon dark> mdi-plus </v-icon>
            </v-btn>
          </v-card-title>
          <v-divider></v-divider>
          <v-data-table :headers="headers" items-per-page="5"> </v-data-table>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="px-3 justify-center">
      <v-col cols="12">
        <v-dialog v-model="comprobanteDialog" width="500px">
          <v-card class="mx-auto justify-center">
            <v-card-title class="justify-center grey darken-3 white--text">
              <span class="mr-16">Agregar comprobante</span>
              <v-spacer></v-spacer>
              <v-btn
                small
                class="red"
                depressed
                @click="comprobanteDialog = false"
              >
                <v-icon small>mdi-close</v-icon>
              </v-btn>
            </v-card-title>

            <v-card-text>
                <v-col cols="12" sm="6" md="6">
                    <v-select
                    label="Selecciona un tipo"
                    v-model="formularioComprobante.tipo"
                    >
                    </v-select>
                </v-col>

                <v-col cols="12" sm="6" md="6">
                    <v-text-field
                    label="Número del comprobante"
                    type="number"
                    v-model="formularioComprobante.num_comprobante"
                    >
                    </v-text-field>
                </v-col>

                <v-col cols="12" sm="12" md="12">
                    <v-text-field
                    label="Monto"
                    type="number"
                    v-model="formularioComprobante.monto"
                    >
                    </v-text-field>
                </v-col>
            </v-card-text>
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
      comprobanteDialog: false,
      headers: [
        {
          text: "Comprobante",
          sortable: "false",
          filterable: "false",
          value: "comprobante",
        },

        {
          text: "Valor",
          sortable: "false",
          filterable: "false",
          value: "valor",
        },

        {
          text: "Tipo",
          sortable: "false",
          filterable: "false",
          value: "tipo",
        },

        {
          text: "Acciones",
          sortable: "false",
          filterable: "false",
          value: "aaa",
        },
      ],

      formularioComprobante: {
        tipo: "",
        num_comprobante: "",
        monto: ""
      },
    };
  },
};
</script>

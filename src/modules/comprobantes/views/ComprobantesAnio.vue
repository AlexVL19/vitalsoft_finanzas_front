<template>
  <div>
    <v-row class="px-3 mx-auto mt-4 mb-4 justify-center">
      <v-btn small dark fab color="blue-grey" to="/empresas">
        <v-icon dark>mdi-home</v-icon>
      </v-btn>
    </v-row>

    <v-row class="px-3 mx-auto mt-6 mb-6 justify-center">
      <h2>Empresa - Agregar comprobantes - 2022</h2>
    </v-row>

    <v-row class="px-3 mx-auto-mt-3 justify-center">
      <h3><strong>Total: </strong> $0</h3>
    </v-row>

    <v-row class="px-3 mx-auto mt-3 mb-3 justify-center">
      <h3><strong>Diferencia CE con gastos:</strong> $0</h3>
    </v-row>

    <v-divider></v-divider>

    <v-row class="px-3 mx-auto mt-3 justify-center">
      <v-col cols="12" sm="4" md="5" v-for="mes in meses" :key="mes.id">
        <v-card class="mx-auto mt-4 justify-center">
          <v-card-title class="justify-center grey darken-3 white--text">
            <span class="mr-16">{{ mes.text }}</span>
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
          <v-data-table :headers="headers" :items-per-page="5"> </v-data-table>
          <v-divider></v-divider>
          <div class="mx-3"><strong>Total: </strong> $0</div>
          <div class="ml-3"><strong>Diferencia CE: </strong> $</div>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="px-3 justify-center">
      <v-col cols="12">
        <v-dialog v-model="comprobanteDialog" width="500px" persistent>
          <v-card class="mx-auto justify-center">
            <v-card-title class="justify-center grey darken-3 white--text">
              <span class="mr-16">Agregar comprobante</span>
              <v-spacer></v-spacer>
              <v-btn
                small
                class="red"
                depressed
                dark
                @click="comprobanteDialog = false"
              >
                <v-icon small>mdi-close</v-icon>
              </v-btn>
            </v-card-title>

            <v-card-text>
              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col cols="12" sm="6" md="6">
                    <v-select
                      label="Selecciona un tipo"
                      v-model="formularioComprobante.tipo"
                      :items="selectTipo"
                      item-text="text"
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
                      v-model="formularioComprobante.monto_vista"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-form>

              <v-col cols="12" class="justify-center" align="center">
                <v-btn color="blue-grey" dark>
                  <v-icon left dark>mdi-plus</v-icon>
                  Agregar
                </v-btn>
              </v-col>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  data() {
    return {
      comprobanteDialog: false,
      meses: [
        { id: 1, text: "Enero" },
        { id: 2, text: "Febrero" },
        { id: 3, text: "Marzo" },
        { id: 4, text: "Abril" },
        { id: 5, text: "Mayo" },
        { id: 6, text: "Junio" },
        { id: 7, text: "Julio" },
        { id: 8, text: "Agosto" },
        { id: 9, text: "Septiembre" },
        { id: 10, text: "Octubre" },
        { id: 11, text: "Noviembre" },
        { id: 12, text: "Diciembre" },
      ],

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
        monto_vista: "",
      },

      selectTipo: [
        { text: "CE" },
        { text: "NO" },
        { text: "NC" },
        { text: "RF" },
        { text: "AP" },
        { text: "IVA" },
        { text: "IND Y CIO" },
        { text: "NO + PR" },
      ],


    };
  },

  watch: {
    "formularioComprobante.monto_vista": function (newValue) {
      const resultado = newValue
        .replace(/\D/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      Vue.nextTick(() => (this.formularioComprobante.monto_vista = resultado));
    },
  },
};
</script>

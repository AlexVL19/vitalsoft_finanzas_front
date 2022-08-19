<template>
  <div>
    <!-- Botón para volver a la vista de empresas -->
    <v-row class="px-3 mx-auto mt-4 mb-4 justify-center">
      <v-btn small dark fab color="blue-grey" to="/empresas">
        <v-icon dark>mdi-home</v-icon>
      </v-btn>
    </v-row>

    <!-- Sección de títulos -->
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

    <!-- Pestañas para mostrar los gráficos estadísticos -->
    <v-row class="px-3 mx-auto justify-center">
      <v-col cols="12">
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

    <!-- Sección para gráficos estadísticos (en proceso)-->
    <v-row class="px-3 mx-auto justify-center">
      <v-col cols="8">
        <v-tabs-items v-model="tab">
          <v-tab-item>
            <v-card class="my-4 mx-4" elevation="4">
              <v-card-text>
                <linechart :chart-data="graficaMovimientos"></linechart>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>

    <!-- Sección de tablas de datos, en donde se itera por cada mes -->
    <div v-for="mes in meses" :key="mes">
      <v-row class="px-3 mx-auto mt-3 mb-3 justify-center">
        <h2>
          <strong>{{ mes }}</strong>
        </h2>
      </v-row>

      <!-- Tabla de gastos, en donde se muestra información de gastos por mes, con opción de añadir,
           eliminar o editar dichos gastos -->
      <v-row class="px-3 mx-auto mt-3 justify-center">
        <v-col cols="12" md="5" sm="5">
          <v-card class="mx-auto mt-4">
            <v-card-title class="justify-center grey darken-3 white--text">
              <span class="mr-16">Gastos de {{ mes }}</span>
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

        <!-- Tabla de ingresos, en donde se muestra cada ingreso por mes y varias opciones para
             agregar, eliminar o editar -->
        <v-col cols="12" md="5" sm="5">
          <v-card class="mx-auto mt-4">
            <v-card-title class="justify-center grey darken-3 white--text">
              <span class="mr-16">Ingresos de {{ mes }}</span>
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

    <!-- Formulario para añadir gastos a la tabla previamente mencionada (Queda añadir información) -->
    <v-row class="px-3 justify-center">
      <v-col cols="12">
        <v-dialog
          v-model="gastosDialog"
          max-width="500px"
          persistent
          scrollable
        >
          <v-card class="mx-auto justify-center">
            <v-card-title class="justify-center grey darken-3 white--text">
              <span class="mr-16">Agregar gasto</span>
              <v-spacer></v-spacer>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    small
                    color="blue-grey"
                    class="mr-2"
                    depressed
                    dark
                    v-bind="attrs"
                    v-on="on"
                    @click="registerAccDialog = true"
                  >
                    <v-icon small>mdi-book-plus</v-icon>
                  </v-btn>
                </template>
                <span>Añadir cuenta contable</span>
              </v-tooltip>
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

            <v-card-text>
              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col cols="12" sm="6" md="6">
                    <v-select
                      label="Código de la cuenta"
                      v-model="formularioGasto.codigo"
                    >
                    </v-select>
                  </v-col>

                  <v-col cols="12" sm="6" md="6">
                    <v-select
                      label="Nombre de la cuenta"
                      v-model="formularioGasto.cuenta"
                    >
                    </v-select>
                  </v-col>

                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      label="Concepto"
                      v-model="formularioGasto.concepto"
                    >
                    </v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="6">
                    <v-select
                      label="Tipo de gasto"
                      v-model="formularioGasto.tipo_gasto"
                    >
                    </v-select>
                  </v-col>

                  <v-col cols="12" sm="12" md="12">
                    <v-text-field label="Valor" v-model="formularioGasto.valor">
                    </v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="6">
                    <v-switch
                      v-model="toggleArea"
                      label="¿Aplica área?"
                    ></v-switch>
                  </v-col>
                </v-row>

                <v-row v-if="toggleArea == true">
                  <v-col cols="12" md="6" sm="6">
                    <v-select label="Área" v-model="formularioGasto.area">
                    </v-select>
                  </v-col>

                  <v-col cols="12" md="6" sm="6">
                    <v-select
                      label="Dependencia"
                      v-model="formularioGasto.dependencia"
                    >
                    </v-select>
                  </v-col>

                  <v-col cols="12" md="6" sm="6">
                    <v-select
                      label="Sub-dependencias"
                      v-model="formularioGasto.subdependencia"
                    >
                    </v-select>
                  </v-col>

                  <v-col cols="12" md="6" sm="6">
                    <v-autocomplete
                      label="Usuarios"
                      v-model="formularioGasto.usuarios"
                    ></v-autocomplete>
                  </v-col>
                </v-row>
              </v-form>

              <v-col cols="12" class="justify-center" align="center">
                <v-btn color="blue-grey" dark>
                  <v-icon left dark>mdi-content-save</v-icon>
                  Guardar
                </v-btn>
              </v-col>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>

    <!-- Formulario para agregar cuentas contables en caso de que se requiera una nueva -->
    <v-row class="px-3 mx-auto justify-center">
      <v-col cols="6">
        <v-dialog persistent width="500px" v-model="registerAccDialog">
          <v-card class="mx-auto justify-center">
            <v-card-title dark class="grey darken-3 justify-center white--text">
              <span class="mr-16">Agregar cuenta</span>
              <v-spacer></v-spacer>
              <v-btn
                small
                dark
                class="red"
                depressed
                @click="registerAccDialog = false"
              >
                <v-icon small>mdi-close</v-icon>
              </v-btn>
            </v-card-title>

            <v-divider></v-divider>

            <v-card-text>
              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field type="number" label="Número de cuenta">
                    </v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="6">
                    <v-text-field type="text" label="Nombre de cuenta">
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

    <!-- Formulario para añadir ingresos a la tabla en donde se muestran los mismos -->
    <v-row class="px-3 justify-center">
      <v-col cols="12">
        <v-dialog
          v-model="ingresosDialog"
          max-width="500px"
          persistent
          scrollable
        >
          <v-card class="mx-auto justify-center">
            <v-card-title class="justify-center grey darken-3 white--text">
              <span class="mr-16">Agregar ingreso</span>
              <v-spacer></v-spacer>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    small
                    color="blue-grey"
                    class="mr-2"
                    depressed
                    dark
                    v-bind="attrs"
                    v-on="on"
                    @click="registerAccDialog = true"
                  >
                    <v-icon small>mdi-book-plus</v-icon>
                  </v-btn>
                </template>
                <span>Añadir cuenta contable</span>
              </v-tooltip>
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

            <v-card-text>
              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col cols="12" sm="6" md="6">
                    <v-select
                      label="Código de la cuenta"
                      v-model="formularioIngreso.codigo"
                    >
                    </v-select>
                  </v-col>

                  <v-col cols="12" sm="6" md="6">
                    <v-select
                      label="Nombre de la cuenta"
                      v-model="formularioIngreso.cuenta"
                    >
                    </v-select>
                  </v-col>

                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      label="Concepto"
                      v-model="formularioIngreso.concepto"
                    >
                    </v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="6">
                    <v-select
                      label="Tipo de gasto"
                      v-model="formularioIngreso.tipo_gasto"
                    >
                    </v-select>
                  </v-col>

                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Valor"
                      v-model="formularioIngreso.valor"
                    >
                    </v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="6">
                    <v-switch
                      v-model="toggleArea"
                      label="¿Aplica área?"
                    ></v-switch>
                  </v-col>
                </v-row>

                <v-row v-if="toggleArea == true">
                  <v-col cols="12" md="6" sm="6">
                    <v-select label="Área" v-model="formularioIngreso.area">
                    </v-select>
                  </v-col>

                  <v-col cols="12" md="6" sm="6">
                    <v-select
                      label="Dependencia"
                      v-model="formularioIngreso.dependencia"
                    >
                    </v-select>
                  </v-col>

                  <v-col cols="12" md="6" sm="6">
                    <v-select
                      label="Sub-dependencias"
                      v-model="formularioIngreso.subdependencia"
                    >
                    </v-select>
                  </v-col>

                  <v-col cols="12" md="6" sm="6">
                    <v-autocomplete
                      label="Usuarios"
                      v-model="formularioIngreso.usuarios"
                    ></v-autocomplete>
                  </v-col>
                </v-row>
              </v-form>

              <v-col cols="12" class="justify-center" align="center">
                <v-btn color="blue-grey" dark>
                  <v-icon left dark>mdi-content-save</v-icon>
                  Guardar
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
import Vue from "vue";

//Se importa el formato de diagrama de líneas y se le otorga un alias para no generar conflictos con el markup
//de HTML
import { Line as linechart } from "vue-chartjs";

//Se importa la interfaz necesaria para el diagrama de líneas
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

//Se importa el objeto para las opciones, datasets y demás 
import graficaMovimientos from "../misc/graficaMovimientos.js";

//Se registra cada interface o plugin importado 
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

export default {
  components: { linechart },
  data() {
    return {
      graficaMovimientos: graficaMovimientos.data,
      ingresosDialog: false,
      gastosDialog: false,
      toggleArea: false,
      registerAccDialog: false,
      tab: null,

      //Array de meses, iterar por cada mes para que el código quede más limpio (Pendiente)
      meses: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ],

      //Objeto para almacenar los campos del formulario de añadir gastos
      formularioGasto: {
        codigo: "",
        cuenta: "",
        concepto: "",
        tipo_gasto: "",
        valor: "",
        area: "",
        dependencia: "",
        subdependencia: "",
        usuarios: "",
      },

      //Objeto para almacenar campos del formulario de añadir ingresos
      formularioIngreso: {
        codigo: "",
        cuenta: "",
        concepto: "",
        tipo_gasto: "",
        valor: "",
        area: "",
        dependencia: "",
        subdependencia: "",
        usuarios: "",
      },

      //Encabezados para los data tables
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

  //Watchers para los valores que pertenecen a ambos formularios para añadir gastos o ingresos.
  //Lo que hace es añadir una coma cada vez que el valor que se introduzca pase de las 4 cifras, y añada
  //Otra coma cada 3 cifras, en cada modificación
  watch: {
    "formularioGasto.valor": function (newValue) {
      const resultado = newValue
        .replace(/\D/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      Vue.nextTick(() => (this.formularioGasto.valor = resultado));
    },

    "formularioIngreso.valor": function (newValue) {
      const resultado = newValue
        .replace(/\D/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      Vue.nextTick(() => (this.formularioIngreso.valor = resultado));
    },
  },
};
</script>

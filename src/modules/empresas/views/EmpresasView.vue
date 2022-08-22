<template>

  <!-- Tabla en donde se muestra el listado de empresas -->
  <div>
    <v-row class="px-3 mx-auto mt-4 justify-center">
      <v-col cols="6">
        <v-card class="mx-auto text-center">
          <v-card-title dark class="justify-center grey darken-3 white--text"
            >Empresas</v-card-title
          >
          <v-divider></v-divider>
          <v-data-table
            :headers="headers"
            :items="empresas"
            :disable-pagination="true"
            :hide-default-footer="true"
            class="text-center row-pointer"
            @click:row="handleClick"
          >
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>

<!-- Modal en donde se muestra un formulario de filtrado tanto para los comprobantes como los movimientos. 
     Se filtran tanto por mes como por año. -->
    <v-row class="px-3 mx-auto justify-center">
      <v-col cols="6">
        <v-dialog v-model="financesDialog" width="400px">
          <v-card class="mx-auto justify-center">
            <v-tabs
              v-model="tab"
              background-color="transparent"
              class="text-center"
              centered
              color="black"
            >
              <v-tab>Movimientos</v-tab>
              <v-tab>Comprobante de egreso</v-tab>
            </v-tabs>

            <v-card-text>
              <v-tabs-items v-model="tab">
                <v-tab-item>
                  <v-form ref="form" lazy-validation>
                    <v-row>
                      <v-col cols="12" sm="6" md="12">
                        <v-select
                          :items="selectSortingMode"
                          item-text="text"
                          label="Selecciona una opción"
                          class="mt-3"
                          v-model="formularioMovimientos.tipo"
                        >
                        </v-select>
                      </v-col>

                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          type="number"
                          label="Año"
                          v-model="formularioMovimientos.año"
                        >
                        </v-text-field>
                      </v-col>

                      <v-col cols="12" sm="6" md="6">
                        <v-select
                          :items="meses"
                          item-text="text"
                          label="Mes"
                          v-model="formularioMovimientos.mes"
                          v-if="formularioMovimientos.tipo == 'Ver por meses'"
                        >
                        </v-select>
                      </v-col>
                    </v-row>
                  </v-form>

                  <div class="d-flex justify-center">
                    <v-col
                      cols="10"
                      align="center"
                      class="justify-center d-flex"
                    >
                      <v-col cols="12" sm="6" md="6" class="justify-center">
                        <v-btn color="blue-grey" dark v-if="formularioMovimientos.tipo == 'Ver por meses'" to="/movimientosMes">
                          <v-icon left dark>mdi-magnify</v-icon>
                          Consultar
                        </v-btn>

                        <v-btn color="blue-grey" dark v-else to="/movimientosAnio">
                          <v-icon left dark>mdi-magnify</v-icon>
                          Consultar
                        </v-btn>
                      </v-col>

                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <v-col
                            cols="12"
                            sm="6"
                            md="6"
                            class="justify-center mx-auto"
                            v-bind="attrs"
                            v-on="on"
                          >
                            <v-btn
                              color="blue-grey"
                              dark
                              @click="accountsDialog = true"
                            >
                              <v-icon>mdi-bookmark-box-multiple</v-icon>
                            </v-btn>
                          </v-col>
                        </template>
                        <span class="mt-n5">Listado de cuentas contables</span>
                      </v-tooltip>
                    </v-col>
                  </div>
                </v-tab-item>

                <!-- ----------------------------- -->

                <v-tab-item>
                  <v-form ref="form" lazy-validation>
                    <v-row>
                      <v-col cols="12" sm="6" md="12">
                        <v-select
                          :items="selectSortingMode"
                          item-text="text"
                          label="Selecciona una opción"
                          class="mt-3"
                          v-model="formularioEgreso.tipo"
                        >
                        </v-select>
                      </v-col>

                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          type="number"
                          label="Año"
                          v-model="formularioEgreso.año"
                        >
                        </v-text-field>
                      </v-col>

                      <v-col cols="12" sm="12" md="6">
                        <v-select
                          :items="meses"
                          item-text="text"
                          label="Mes"
                          v-if="formularioEgreso.tipo == 'Ver por meses'"
                          v-model="formularioEgreso.mes"
                        >
                        </v-select>
                      </v-col>
                    </v-row>
                  </v-form>

                  <div class="d-flex justify-center">
                    <v-col
                      cols="10"
                      align="center"
                      class="justify-center d-flex"
                    >
                      <v-col cols="12" sm="6" md="6" class="justify-center">
                        <v-btn color="blue-grey" dark to="/comprobantesMes" v-if="formularioEgreso.tipo == 'Ver por meses'">
                          <v-icon left dark>mdi-magnify</v-icon>
                          Consultar
                        </v-btn>

                        <v-btn color="blue-grey" dark to="/comprobantesAnio" v-else>
                          <v-icon left dark>mdi-magnify</v-icon>
                          Consultar
                        </v-btn>
                      </v-col>

                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <v-col
                            cols="12"
                            sm="6"
                            md="6"
                            class="justify-center mx-auto"
                            v-bind="attrs"
                            v-on="on"
                          >
                            <v-btn
                              color="blue-grey"
                              dark
                              @click="accountsDialog = true"
                            >
                              <v-icon>mdi-bookmark-box-multiple</v-icon>
                            </v-btn>
                          </v-col>
                        </template>
                        <span>Listado de cuentas contables</span>
                      </v-tooltip>
                    </v-col>
                  </div>
                </v-tab-item>
              </v-tabs-items>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>

    <!-- Modal en donde se muestra el listado de cuentas contables, con opción para añadir uno. -->
    <v-row class="px-3 mx-auto justify-center">
      <v-col cols="6">
        <v-dialog width="600px" v-model="accountsDialog">
          <v-card class="mx-auto justify-center">
            <v-card-title dark class="grey darken-3 justify-center white--text"
              >Listado de cuentas contables</v-card-title
            >
            <v-divider></v-divider>
            <v-card-text>
              <v-btn
                class="mt-4 mb-2"
                fab
                dark
                small
                depressed
                color="light-green"
                @click="registerAccDialog = true"
              >
                <v-icon dark> mdi-plus </v-icon>
              </v-btn>
              <v-text-field
                v-model="buscarCuentas"
                append-icon="mdi-magnify"
                label="Buscar..."
                single-line
                hide-details
              >
              </v-text-field>
              <v-data-table
                :headers="headersCuentas"
                :items="cuentas"
                :items-per-page="5"
                :search="buscarCuentas"
              >
                <template v-slot:[`item.actions`]="{}">
                  <v-icon small class="mr-2"> mdi-pencil </v-icon>
                  <v-icon small> mdi-delete </v-icon>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>

<!-- Modal que muestra un formulario para agregar cuentas contables nuevas. -->
    <v-row class="px-3 mx-auto justify-center">
      <v-col cols="6">
        <v-dialog persistent width="500px" v-model="registerAccDialog">
          <v-card class="mx-auto justify-center">
            <v-card-title dark class="grey darken-3 justify-center white--text">
                <span class="mr-16">Agregar cuenta</span>
                <v-spacer></v-spacer>
                <v-btn small dark class="red" depressed @click="registerAccDialog = false">
                    <v-icon small>mdi-close</v-icon>
                </v-btn>
            </v-card-title>

            <v-divider></v-divider>

            <v-card-text>
              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-model="formularioAgregar.codigo"
                      type="number"
                      label="Número de cuenta"
                    >
                    </v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-model="formularioAgregar.nombre"
                      type="text"
                      label="Nombre de cuenta"
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
export default {
  data() {
    return {
      financesDialog: false,
      accountsDialog: false,
      registerAccDialog: false,

      //Array que almacena detalles de la empresa, como su ID y el nombre. 
      empresaDetails: [],

      //Buscador para el listado de cuentas contables
      buscarCuentas: "",

      //Variable que funciona a modo de v-model para desplazarse entre pestañas 
      tab: null,

      //Listado de empresas (Placeholder)
      empresas: [
        { numero: 1, empresa: "Red Medica Vital" },
        { numero: 2, empresa: "Vital Mascotas" },
        { numero: 3, empresa: "Habitat Hotel" },
        { numero: 4, empresa: "Casa" },
        { numero: 5, empresa: "Certi Expres Pereira" },
        { numero: 6, empresa: "Certi Expres Estadio" },
        { numero: 7, empresa: "Certi Expres Motos" },
        { numero: 8, empresa: "Clínica Lasik" },
        { numero: 9, empresa: "Finca (Barbas)" },
      ],

      //Listado de cuentas contables (Placeholder)
      cuentas: [
        { codigo: "1105", cuenta: "Caja" },
        { codigo: "110505", cuenta: "Caja general" },
        { codigo: "11050505", cuenta: "Servicio de ambulancias" },
        { codigo: "1110", cuenta: "Cuentas corrientes" },
        { codigo: "111005", cuenta: "Moneda Nacional" },
      ],

      //Encabezados para el data table
      headers: [
        {
          text: "No.",
          sortable: false,
          filterable: false,
          value: "numero",
        },
        {
          text: "Movimientos empresas",
          sortable: false,
          filterable: false,
          value: "empresa",
        },
      ],

      //Encabezados para el data table de cuentas contables
      headersCuentas: [
        {
          text: "Código",
          sortable: false,
          filterable: false,
          value: "codigo",
        },

        {
          text: "Cuenta",
          sortable: false,
          value: "cuenta",
        },

        {
          text: "Acciones",
          sortable: false,
          value: "ssssssss",
        },
      ],

      //Objeto que sirve a modo de selección al filtrar por meses o por año
      selectSortingMode: [{ text: "Ver por año" }, { text: "Ver por meses" }],

      //Array que almacena los meses del año gracias a un for que se encuentra en el mounted() 
      meses: [],

      //Objeto que almacena los cambios hechos por el usuario al filtrar movimientos
      formularioMovimientos: {
        tipo: "Ver por año",
        año: new Date().getFullYear(),
        mes: (new Date().toLocaleString('es', { month: 'long' })).charAt(0).toUpperCase() + (new Date().toLocaleString('es', { month: 'long' })).slice(1), //Pendiente por mejorar
      },

      ////Objeto que almacena los cambios hechos por el usuario al filtrar comprobantes de egresos
      formularioEgreso: {
        tipo: "Ver por año",
        año: new Date().getFullYear(),
        mes: (new Date().toLocaleString('es', { month: 'long' })).charAt(0).toUpperCase() + (new Date().toLocaleString('es', { month: 'long' })).slice(1) //Pendiente por mejorar
      },

      //Objeto que almacena cambios en el formulario
      formularioAgregar: {
        codigo: "",
        nombre: "",
      },
    };
  },

  mounted() {
    //Se itera por cada mes del año mediante un for
    for (let index = 0; index < 12; index++) {

      //Se instancia un objeto de fecha que comience desde el index (0), es decir, enero
      var date = new Date(2022, index, 1)

      //Se convierte el número del mes a un string localizado al español
      let month = date.toLocaleString('es', { month: 'long' })

      // A ese string se le extrae el primer caracter y lo convierte a uppercase, y devuelve el elemento 
      // seleccionado
      month = (month.charAt(0).toUpperCase()) + (month.slice(1))

      //Finalmente se pushea el elemento al array, para poder utilizarlo posteriormente
      this.meses.push(month)
    }
  },

  methods: {

    //Método que permite obtener los detalles de la empresa y abrir el modal de filtrado
    handleClick(val) {
        this.empresaDetails = val
        this.financesDialog = true
    }
  },
};
</script>

<style lang="css" scoped>

.row-pointer :deep(tbody tr :hover) {
  cursor: pointer;
}
</style>
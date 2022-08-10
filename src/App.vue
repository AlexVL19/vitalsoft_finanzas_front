<template>
  <v-app>
      <v-card tile>
        <v-navigation-drawer
          fixed
          expand-on-hover
          dark
        >
          <v-list>
            <v-list-item class="px-2">
              <v-list-item-avatar>
                <v-img src="@/assets/VitalSoftBlanco.png"></v-img>
              </v-list-item-avatar>
            </v-list-item>
            <v-divider></v-divider>

            <v-list-group :value="true" prepend-icon="mdi-currency-usd">
              <template v-slot:activator>
                <v-list-item-title>Finanzas</v-list-item-title>
              </template>

              <v-list :value="true" no-action>
                <v-list-item to="/empresas">
                  <v-list-item-icon>
                    <v-icon>mdi-swap-horizontal-bold</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Gastos - Ingresos</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-list-group>
          </v-list>
        </v-navigation-drawer>
      </v-card>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

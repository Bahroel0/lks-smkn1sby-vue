<template>
  <v-card class="d-inline-block ma-2 " flat outlined width="100%">
    <v-card-title class="warna">
      {{ name }}
      <v-spacer />
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="update()">
            <v-list-item-content>
              Edit
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="deleted()">
            <v-list-item-content>
              Hapus
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-card-title>

    <v-card-text>
      {{ description }}
    </v-card-text>
    <v-card-actions>
      Rp. {{ price }}
      <v-spacer />
      <v-btn icon>
        <v-icon color="green">mdi-cart</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: "Deskripsi"
    },
    price: {
      type: Number,
      required: true
    }
  },
  methods: {
    update() {
      this.$store.dispatch("setProduct", {
        id: this.id,
        name: this.name,
        description: this.description,
        price: this.price
      });
    },
    deleted() {
      this.$store.dispatch("deleteProduct", this.id);
    }
  }
};
</script>
<style>
.warna {
  color: red;
}
</style>

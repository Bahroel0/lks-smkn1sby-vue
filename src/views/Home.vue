<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="6">
        <v-card flat outlined>
          <v-card-title>Form Produk</v-card-title>
          <v-card-text class="pb-0">
            <v-form ref="form_produk">
              <v-text-field
                v-model="name"
                :rules="[v => !!v || 'Nama harus diisi']"
                placeholder="Nama produk"
                solo
                outlined
                flat
              />
              <v-text-field
                v-model="description"
                :rules="[v => !!v || 'Deskripsi harus diisi']"
                placeholder="Deskripsi"
                solo
                outlined
                flat
              />
              <v-text-field
                v-model="price"
                :rules="[v => !!v || 'Harga harus diisi']"
                placeholder="Harga"
                type="number"
                solo
                outlined
                flat
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              text
              class="primary"
              @click="editedProduct ? update() : submit()"
            >
              {{ editedProduct ? "Update" : "Simpan" }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="item in products" :key="item.id">
        <ProdukItem
          :id="item.id"
          :name="item.name"
          :description="item.description"
          :price="item.price"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      id: null,
      name: null,
      description: null,
      price: null
    };
  },
  watch: {
    editedProduct(v) {
      if (v) {
        this.id = v.id;
        this.name = v.name;
        this.description = v.description;
        this.price = v.price;
      }
    }
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
    editedProduct() {
      return this.$store.getters.product;
    }
  },
  methods: {
    submit() {
      if (this.$refs.form_produk.validate()) {
        this.$store.dispatch("addProduct", {
          name: this.name,
          description: this.description,
          price: parseInt(this.price)
        });
        this.$refs.form_produk.reset();
      }
    },
    update() {
      if (this.$refs.form_produk.validate()) {
        this.$store.dispatch("updateProduct", {
          id: this.id,
          name: this.name,
          description: this.description,
          price: parseInt(this.price)
        });
        this.$refs.form_produk.reset();
        this.$store.dispatch("setProduct", null);
      }
    }
  }
};
</script>

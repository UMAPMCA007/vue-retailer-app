<template>
    <div class="container mb-5">
        <div class="row ">
            <div class="col-md-6 offset-md-3 card mt-5">
                <h1 class="text-center">Retailer</h1>
                <div>
                    <div class="form-group pt-2">
                        <label >Retailer Name</label>
                        <input type="text" class="form-control" v-model="name"  placeholder="Retailer Name">
                        
                    </div>
                    <div class="form-group">
                        <label>Shop Name</label>
                        <input type="text" class="form-control" v-model="shop" placeholder="Shop name">
                    </div>
                    <div class="form-group">
                        <label class="form-check-label">Shop Address</label>
                        <input type="text" class="form-control" v-model="shop_address" placeholder="Shop Address">
                    </div>
                    <div class="form-group pt-3 pb-3 row ">
                        <button v-if="!edit_retailer_id" class=" col-md-2 offset-md-3 btn btn-primary" @click="saveR()">Submit</button>
                        <button  v-else  class=" col-md-2 offset-md-2 btn btn-primary" @click="updateR()">Update</button>
                        <button class=" col-md-2 offset-md-2 btn btn-danger" @click="resetR()">Reset</button>
                    </div>
                </div>
            </div>
       </div>
       <div class="table-responsive">
        <table class="table mt-5">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Retailer name</th>
                    <th scope="col">Shop Name</th>
                    <th scope="col">Shop Address</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(retailer,index) in retailers" :key="index">
                                <th scope="row">{{++index}}</th>
                                <th>{{retailer.name}}</th>
                                <td>{{retailer.shop}}</td>
                                <td>{{retailer.shop_address}}</td>
                                <td> 
                                    <button class="btn btn-primary" @click="editR(--index)">Edit</button>
                                    <button class="btn btn-danger" @click="deleteR(--index)">Delete</button>
                                </td>
                    </tr>
                </tbody>
        </table>
        <Bootstrap4Pagination
        :data="retailers"
        @pagination-change-page="getResults"
    />
       </div>
       <Pagination class="mt-4" :data="retailers" @pagination-change-page="list" />  
      </div>
    
</template>
<script>
import { Bootstrap4Pagination } from 'laravel-vue-pagination';
    export default {  
           data() {
              return {
                 retailers: [],
                 name:'',
                 shop:'',
                 shop_address:'',
                 api:'api/retailers',
                 edit_retailer_id:'',
                 edit_index:'',
                 axios:axios
              }
           },
              mounted() {
                this.list()
                // this.axios.get(this.api).then(res=>{
                //  this.retailers=res.data;    
                // });
              },
                methods: {
                    list(page=1){
                        axios.get(`/api/retailers?page=` +page ).then(res=>{
                            console.log(res.data);
                            this.retailers=res.data;    
                        });
                    },

                    saveR(){
                        if(this.name.length >0 && this.shop.length >0 && this.shop_address.length >0){
                            let data = {'name':this.name,
                                        'shop':this.shop,
                                        'shop_address':this.shop_address,
                                       };    
                                                  
                            this.axios.post(this.api,data).then(res=>{
                            this.retailers.push(res.data); 
                            this.name='';
                            this.shop='';
                            this.shop_address='';   
                            });  
                        }
                    },
                deleteR(index){
                if(this.retailers[index]._id){
                    this.axios.delete(this.api+'/'+this.retailers[index]._id).then(res=>{
                    this.retailers=res.data;
                    });
                }
            },
            editR(index){
                this.name=this.retailers[index].name;
                this.shop=this.retailers[index].shop;
                this.shop_address=this.retailers[index].shop_address;
                this.edit_retailer_id=this.retailers[index]._id;
                console.log(this.edit_retailer_id);
                this.edit_index=index;
            },
            updateR(index){
                let data = {'name':this.name,
                            'shop':this.shop,
                            'shop_address':this.shop_address,
                            }; 
                this.axios.put(this.api+'/'+this.retailers[this.edit_index]._id,data).then(
                    res=>{
                    this.retailers[this.edit_index].name=res.data.name; 
                    this.retailers[this.edit_index].shop=res.data.shop;
                    this.retailers[this.edit_index].shop_address=res.data.shop_address;
                    this.name='';
                    this.shop='';
                    this.shop_address='';
                });
                this.resetR(); 
            },
            resetR(){
                this.name="";
                this.shop="";
                this.shop_address="";

            }

         }

    }

    </script>
   <style scoped>
        .pagination{
            margin-bottom: 0;
        }
    </style>
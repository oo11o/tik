<template>
    <div class="content">
        <div class="row" v-if="idUser.length<1">
            <div class="class">
                Default User: <strong>oleg_sheff</strong>
            </div>
        </div>

        <div class="row" v-else>
            <div class="col">
                <p>
                    Name User: <strong>{{idUser}}</strong>
                </p>
            </div>
        </div>

<!--        <div class="row">-->
<!--            <div class="col">-->
<!--                <img width="100" :src=user.itemList[0].author.avatarThumb>-->
<!--            </div>-->
<!--        </div>-->

<!--        <div class="row" v-for="item in user.itemList" :key="item">-->
<!--            <div class="col">-->
<!--            </div>-->
<!--        </div>-->
    </div>

</template>

<script>

    import jsonUser from "../../user-feed";

    export default {
        name: 'User',
        data() {
            return {
                idUser: this.$route.params.id,
                api: false,
                user: ''
            }
        },

        methods: {
            async getNewsAPI(name) {
                this.news = await fetch(`https://tiktok33.p.rapidapi.com/user/feed/${name}`, {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "tiktok33.p.rapidapi.com",
                        "x-rapidapi-key": "c7480a2a49msh2e77ae70677b873p13420bjsne97ada8a8580"
                    }
                }).then(response => {
                    return response;
                })
                    .catch(err => {
                        console.error(err);
                    });
            },

            getNewsJson() {
                this.user = jsonUser
            }
        },

        mounted() {
            this.api ? this.getNewsApi() : this.getNewsJson();
        },
    }

</script>
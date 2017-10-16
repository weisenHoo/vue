<template>
    <div class="home">
        <h1>这是主页...</h1>
        <ul>
            <li v-for="v in news">
                <span v-text="v.id"></span> - <span v-text="v.title"></span>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                news: [
                    {id: 1, title: 'hdcms'},
                    {id: 2, title: 'hdphp'},
                ]
            }
        }
    }
</script>
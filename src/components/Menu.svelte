<script lang="ts">

</script>

<nav class="fixed z-50 top-0 left-0 right-0">
    <ul class="flex justify-around p-3">
        <a href="/" class="text-zinc-100 m-2 cursor-pointer hover:text-blue-400">Proyectos</a>
        <li class="text-zinc-100 m-2 cursor-pointer hover:text-blue-400">Github</li>
        <li class="text-zinc-100 m-2  cursor-pointer hover:text-blue-400">Whatsapp</li>
    </ul>
</nav>

<style>
    nav{
        background-color: #334155;
        background-color: linear-gradient(90deg,#334155 0%, #020617 100%);
        
        font-size: 25px;

        animation: menu linear both;
        animation-timeline: scroll(root);
        animation-range: 0 200px;
    }
    nav ul a,nav ul li{
        background-color: transparent;
        font-size: 25px;

        animation: a linear both;
        animation-timeline: scroll(root);
        animation-range: 0 200px;
    }
    @keyframes menu {
        to{
            background-color: rgba(255, 255, 255, .4);
            backdrop-filter: blur(5px);
            font-size: 18px;
            color: black;      
        }
    }
    @keyframes a {
        to{
            font-size: 18px;
            color: black;      
        }
    }
</style>
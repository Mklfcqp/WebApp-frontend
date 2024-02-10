<template>
    <div class="info">

        <div class="title">ABOUT ME</div>

        <p>I am <span class="text_name">Tomáš Pitron</span>, Junior Java Developer.</p>

        <p>As a team player with the ability to work independently and with passion of self-education, I have
            gained valuable experience working on web application development as a business partner and leading
            small project regarding migration of suppliers to new system.</p>

        <p>I am highly motivated and driven to contribute to dynamic development projects, leveraging my
            technical skills and collaborative mindset to create innovative solutions, where I can contribute to
            dynamic development projects utilizing my analytic mindset and technical skills to create innovative
            solutions.</p>

    </div>
</template>




<script>
export default {
    name: 'TCVInfo'
}    
</script>




<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Six+Caps&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&family=Nunito:wght@200;300;400;500;600;700;800;900;1000&display=swap');

.info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30rem;
    height: 30rem;
    text-align: justify;
    gap: 20px;
}

.title {
    font-family: 'Six Caps', 'Noto Serif', sans-serif;
    color: rgb(179, 179, 179);
    font-size: 8rem;
    letter-spacing: 3px;
}

.info p {
    font-family: 'Noto Serif', sans-serif;
    color: #f0caca;
    font-weight: 200;
    font-size: 1.1rem;
    line-height: 1.5;
    letter-spacing: 0.5px;
}

.text_name {
    font-family: 'Noto Serif', sans-serif;
    font-weight: 300;
    font-size: 1.5rem;
    color: #50A7C2;
}

</style>
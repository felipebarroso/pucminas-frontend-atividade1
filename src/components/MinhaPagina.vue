<template>
  <div class="hello">
    <div id="top">
      <div id="menu">
        <ul>
          <li>
            <a href="#" target="_blank">Bloguis</a>
          </li>
          <li>
            <a href="#" target="_blank">Sobris</a>
          </li>
          <li>
            <a href="#" target="_blank">Descrissonsis</a>
          </li>
        </ul>
      </div>
      <div id="foto">
        <div id="foto-img">
          .
        </div>
      </div>
      <div id="info">
        <div id="nome">
          <h1>{{ nome }}</h1>
        </div>
        <div id="descricao">
          <p>{{ descricao }}</p>
        </div>
      </div>
    </div>
    <div id="noticias">
      <h2>Últimas Notícias</h2>
      <ul>
        <li v-for="noticia in noticias" :key="noticia.id">
          {{ noticia.conteudo }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MinhaPagina',
  data () {
    return {
      nome: 'Mussum Ipsum',
      descricao: 'Mussum Ipsum, cacilds vidis litro abertis. Sapien in monti palavris qui num significa nadis i pareci latim. Quem num gosta di mé, boa gentis num é. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.',
      noticias: [
        { id: 1, conteudo: 'Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis.' },
        { id: 2, conteudo: 'Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit.' },
        { id: 3, conteudo: 'Interagi no mé, cursus quis, vehicula ac nisi. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit.' },
        { id: 4, conteudo: 'Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.' },
        { id: 5, conteudo: 'Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.' }
      ]
    }
  }
}
</script>

<style scoped>
#hello{
  width: 100%;
}

#top{
  background-color: cadetblue;
  float: left;
  width: 100%;
  padding: 20px 0px 20px 0px;
  margin: 0px;
}

h1, h2 {
  font-weight: normal;
}

h1{
  font-weight: bold;
  color: whitesmoke;
  font-size: 40px;
  margin: 0px;
  padding: 0px;
}

h2{
  font-weight: bold;
}

ul {
  list-style-type: none;
  padding: 0px;
  margin: 0px;
}

#menu{
  float: left;
  width: 100%;
}

#menu li {
  display: inline-block;
  margin: 0px 15px 0px 15px;
}

a {
  color: aliceblue;
}

#foto{
  float: left;
  width: 40%;
  text-align: center;
  padding: 50px 0px 50px 0px;
}

#foto-img{
  float: right;
  width: 170px;
  height: 170px;
  border-radius: 100px 100px 100px 100px;
  background-image: url("../assets/mussum.png");
  background-size: 100%;
  background-position: center;
}

#info{
  float: right;
  width: 55%;
  text-align: left;
  padding: 50px 0px 50px 0px;
}

#nome{
  float: left;
  width: 100%;
  margin: 0px;
  padding: 0px;
}

#descricao{
  float: left;
  width: 50%;
  margin: 0px;
  padding: 0px;
}

#noticias{
  text-align: left;
  display: table;
  margin: 0 auto;
  padding: 50px;
  width: 20%;
}

#noticias li {
  padding: 15px 0 15px 0px;
  text-align: left;
}
</style>

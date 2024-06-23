let movie =
    [
        {
            Name: "ONE PIECE ",
            Poster: "https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9pbWFnZXMtY2RuLnVidXkuY28uaW4vNjMzZmYxMTU3ZTNmYmMyNTU1NzUxN2M4LW9uZS1waWVjZS1wb3N0ZXItamFwYW5lc2UtYW5pbWUtcG9zdGVycy5qcGc.jpg",
            Rating: 9.9,
            char: "Monkey D. Luffy · Roronoa Zoro · Usopp · Nami · Vinsmoke Sanji · Nico Robin · Tony Tony Chopper · Franky "
        },
        
        {
            Name: "DEMON SLAYER",
            Poster: "https://www.kakuchopurei.com/wp-content/uploads/2021/07/Demon-Slayer-Season-2.jpg",
            Rating: 9.7,
            char:"Tanjiro Kamado · Zenitsu Agatsuma · Inosuke Hashibira"
        },

        {
            Name: "JUJUSHU KISAN",
            Poster: "https://images-cdn.ubuy.co.in/633feb8bd279163476374ad1-japan-anime-manga-poster-jujutsu.jpg",
            Rating: 9.6,
            char:"Yuji Itadori · Sukuna · Megumi Fushiguro · Satoru Gojo · Nobara Kugisaki · Kenjaku · Hana Kurusu · Yuta Okkotsu"
        },

        {
            Name: "ATTACK ON TITAN",
            Poster: "https://images-cdn.ubuy.co.id/63b6146ddecbee137603e92a-attack-on-titan-24-x-36-poster-by-movie.jpg",
            Rating: 9.8,
            char:"Eren Yeager . Mikasa Ackerman . Armin Arlert . Levi Ackerman . Erwin Smith"
        },

        {
            Name: "TOKYO REVENGERS",
            Poster: "https://m.media-amazon.com/images/M/MV5BNTVkMzRlYmMtYzc1Ny00YTQ5LWI5ZTAtNTk3YmYxOWYwZGVlXkEyXkFqcGdeQXVyOTc4OTAwMjU@._V1_.jpg",
            Rating: 9.3,
            char:"Manjiro Sano(Mikey) . Ken Ryūgūji .  Shion Madarame · Shuji Hanma · Soichiro Matsuno."
        },
        
        

        {
            Name: "NARUTO",
            Poster: "https://5.imimg.com/data5/ANDROID/Default/2022/12/WA/YQ/TK/15232517/product-jpeg-500x500.jpg",
            Rating: 8.8,
            char:"Sasuke Uchiha · Sakura Haruno · Kakashi Hatake ; Jiraiya · Tsunade Senju · Shikamaru Nara ; Choji Akamichi · Ino Yamanaka."
        },


        {
            Name: "BLACK CLOVER",
            Poster: "https://m.media-amazon.com/images/I/81iOs6TbHpL._AC_UF1000,1000_QL80_.jpg",
            Rating: 9.3,
            char:"Asta · Noelle Silver · Yuno · Yami Sukehiro · Finral Roulacase · Charmy Papittoson · Luck Voltia · Magna Swing."
        },

        {
            Name: "DEATH NOTE",
            Poster: "https://m.media-amazon.com/images/I/71GqUgwo-eL.jpg",
            Rating: 9.1,
            char:"Sachiko Yagami · Sasaki · Sayu Yagami · Seam Solt · Shingo Mido · Shiniichiro Yamasaki · Shuichi Aizawa · Sidoh"
        },

        {
            Name: "BLEACH",
            Poster: "https://images-cdn.ubuy.co.in/634e3aafa1c9c928870f8b4a-poster-stop-online-bleach-manga-anime.jpg",
            Rating: 9.4,
            char:"Nana Baba · Baishin · Bambies · Lille Barro · Bambietta Basterbine · Batsu'unsai Katori · Bawabawa · Bazz-B."
        },

        {
            Name: "BLUE LOCK",
            Poster: "https://pbs.twimg.com/media/FSn0GtSXwAA0Uy8.jpg:large",
            Rating: 9.5,
            char:""
        },



        {
            Name: "HAIKYUU",
            Poster: "https://m.media-amazon.com/images/I/810HuvPtHNL.jpg",
            Rating: 9.3,
            char:"Michael Kaiser . Seishiro Nagi . Ryusei Shido . Yoichi Isagi . Rin Itoshi . Sae Itoshi . Meguru Bachira"
        },

        {
            Name: "TOKYO GHOL",
            Poster: "https://images-cdn.ubuy.co.in/634d0cf29208795bbe4d9900-poster-stop-online-tokyo-ghoul.jpg",
            Rating: 9.3,
            char:"Gagi and Guge · Ganbo · Gil · Ginshi Shirazu · Goumasa Tokage"
        },



    ]


function searchMovie() {
    let MovieName = document.getElementById('search').value;
    console.log(MovieName);
}


function displayMovie() {

    let htmlStrings = ``;

    for(let i=0;i<movie.length;i++)
    {

        htmlStrings+= ` <div class="movie">

        <div class="overlay">

            <div class="vedio">

            </div>

            <div class="details">

                <h1>${movie[i].Name}</h1>
                <h2>${movie[i].Rating}</h2>

                <P>${movie[i].char}</P>

            </div>

        </div>

        <img class="poster" src="${movie[i].Poster}" alt="poster">

    </div>`

    }

    document.getElementById('Movies').innerHTML=htmlStrings;

}


displayMovie();


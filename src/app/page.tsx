import Post from "@/components/Post/post";

export default function Home() {

  const posts = [
    {
      game: "Fluminense 2 x 0 Flamengo",
      favoritePlayer: "Ganso",
      date: "2021-05-15",
      people: ["Matthew", "Luigi", "Joao"],
      description: "O Fluminense venceu o Flamengo por 2 a 0 na noite de ontem, no Maracanã. Com gols de Nene e Yago Felipe, o tricolor das Laranjeiras venceu o clássico das multidões e se classificou para a final do Campeonato Carioca.",
      image: "/soccer.jpg",
      champion: "Campeonato Carioca"
    },
    {
      game: "Vasco 4 x 1 Flamengo",
      favoritePlayer: "Cano",
      date: "2021-05-15",
      people: ["Matthew", "Luigi", "Joao", 'Renan'],
      description: "O Vasco venceu o Flamengo por 4 a 1 na noite de ontem, no Maracanã. Com gols de Cano, Morato, Léo Matos e Gabriel Pec, o Gigante da Colina venceu o clássico das multidões e se classificou para a final do Campeonato Carioca.",
      image: "/soccer.jpg",
      champion:"Libertadores"
    }
  ]
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-5">
      {
        posts.map((post, index) => (
          <Post key={index} {...post} />
        ))
      }
    </main>
  );
}

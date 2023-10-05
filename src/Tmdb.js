

const API_BASE= "https://api.themoviedb.org/3";
const API_KEY="45a2827ac4d82dc79169b3487a959dca";
const basicFatch=async (endpoint)=>{
  const req=await fetch("${API_BASE}${endpoint}");
  const json= await req.json();
  return json();
 }
export default{
    getHomeList:async ()=>{
        return[
          {
            slug:'originals',
            title:'originais da netflix',
            items:await basicFatch('/discorver/tv?with_network=213&language=pt-BR&api_key=${API_KEY}') ,
          },
          {
   
            slug:'trending',
            title:'Recomendados para você',
            items:await basicFatch('/treding/all/week?language=pt-BR&api_key=${API_KEY}'),

          },
          {
            slug:'torated',
            title:'Em alta',
            items:await basicFatch('/movie/top_rated?language=pt-BR&api_key=${API_KEY}'),
           },

        ];
    }
}








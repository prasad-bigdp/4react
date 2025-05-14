let movies = [
    {
        title:"RRR"
    },
    {
        title:"KGF"
    },
    {
        title:"vikram"
    }
]
export default function handler (req, res)
{
   
        res.staus(200).json(movies)
}
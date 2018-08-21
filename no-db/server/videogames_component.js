let videogames = [
{
id:1,
name:'Doom Classic',
year:1993,
price:'$3.75',
review:'Potato graphics but still a good game for its time.',
image: 'https://s.yimg.com/fz/api/res/1.2/.QMxzvrcDxOumfvDRDCKiA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTE4MDtxPTgwO3c9MTIx/https://s.yimg.com/zb/imgv1/255e1dbc-4957-37d3-bc16-f848c9aa97e5/t_500x300'
},{
id:2,
name:'Doom II: Hell on Earth',
year:1994,
price:'$2.50',
review:'Potato graphics again but still a classic.',
image:'https://s.yimg.com/fz/api/res/1.2/xaNqDGy5GPWmXrFOHBwiQQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTE4MDtxPTgwO3c9MTc5/https://s.yimg.com/zb/imgv1/52313333-0476-3652-97ee-30c58efa7502/t_500x300'
},{
id:3,
name:'Grand Theft Auto: San Andreas',
year:2004,
price:"$15.00",
review:'Overall fun game!',
image:'https://s.yimg.com/fz/api/res/1.2/_WBmBj5hbsCvMCqaLkMIFA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTE4MDtxPTgwO3c9MTQ0/https://s.yimg.com/zb/imgv1/938647c7-3758-3adf-a42b-2147f48c7b29/t_500x300'
},{
id:4,
name:'Crash Team Racing',
year:1999,
price:'$15.00',
review:'Better than mario kart!',
image:'https://s.yimg.com/fz/api/res/1.2/l82pkhS7kGyBnUcKCK306A--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTE4MDtxPTgwO3c9MTgw/https://s.yimg.com/zb/imgv1/68975c97-1067-3ad8-aaff-a58e4c70d192/t_500x300'
},{
id:5,
name:'Super Smash Bros',
year:1999,
price:'$10.00',
review:'Old but still awesome!',
image:'https://tse1.mm.bing.net/th?id=OIP.iWoiUqJnjkO28m5F8BmJ_AAAAA&pid=15.1&P=0&w=245&h=177'
},{
id:6,
name:'Crash Bandicoot Warped',
year:1998,
price:'$15.00',
review:'Good old childhood nostalgia!',
image:'https://tse3.mm.bing.net/th?id=OIP.4GwSltmvk-AWeePnzFFbPwHaHa&pid=15.1&P=0&w=300&h=300',
},{
id:7,
name:'Halo Reach',
year:2010,
price:'$20.00',
review:'Most sadest game I have ever played.',
image:'https://tse3.mm.bing.net/th?id=OIP.jfd4liM2Y5d8psefMFcVAgHaEK&pid=15.1&P=0&w=271&h=153',
}]
let id = 0

module.exports = {
    read: (req, res) => {
        console.log('hit')
        res.status(200).send(videogames)
    },

    create: (req, res) => {
        const { name, year, price, review, image } = req.body
        let videogame = {
            id:videogames.length + 1,
            name: name,
            year: year,
            price: price,
            review: review,
            image: image
        }
        id++
        videogames.push(videogame)
        res.status(200).send(videogames)
    },

    update: (req, res) => {
        console.log(req.body)
        const { review, year, name, image, price } = req.body
        const { id } = req.params
        const index = videogames.findIndex(e => e.id == id)
        let games = videogames[index];
         videogames[index] = {
            id: +id,
            review: review || games.review,
            year: games.year,
            name: games.name,
            image: games.image,
            price: games.price
        }
        res.status(200).send(videogames)
    },

    delete: (req, res) => {
        const {id} = req.params
        const index = videogames.findIndex(e => e.id == id)
        if(index !== -1){
            videogames.splice(index, 1)
            res.status(200).send(videogames)
        }
    },
}
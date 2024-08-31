import Router from 'express'
import {Book} from '../models/books.js'
export const router = new Router()
router.get('/book', async (req, res) => {
    
    try {
        const books = await Book.findAll()
        res.json(books)
    }catch (err) {
        res.status(500).json({ message: 'Error fetching books' })
        }
        })

router.post('/book', async (req, res) => {
     const dataBook = req.body
     console.log(req.body)
    try{
        const newBook = await Book.create(dataBook)
        res.status(201).json(newBook)
    }catch(err){
        res.status(500).json({ message: 'Error creating book' })
    }
})
router.put('/book/:id', async (req, res) => {
    try{
        const {title, author, year} = req.body
        const id = req.params.id
        const updated = await Book.update({title, author, year}, {where: {id}})
        if(updated){
            const updatedBook = await Book.findOne({where: {id}})
            res.status(200).json(updatedBook)
}else{
    res.status(404).json({ message: 'Book not found' })
        }
        }catch(err){
            res.status(500).json({ message: 'Error updating book' })
            }
})
router.delete('/book/:id', async (req, res) => {
    try{
        const id = req.params.id
        const deleted = await Book.destroy({where: {id}})
        if(deleted){
            res.status(201).json({ message: 'Book deleted' })
            }else{
                res.status(404).json({ message: 'Book not found' })
                }
        }catch(err){
            res.status(500).json({ message: 'Error deleting book' })
            }
            })

        
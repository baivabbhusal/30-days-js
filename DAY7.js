//Activity 1--Object creation and access

const book={
    title:"Computer Architecture",
        author:"Morris Mano",
        year:2013,
         //Activity 4--This keyword
        titleYear:function(){
            console.log(`Title:${this.title}`);
             }
    
    };
    console.log(book);
    
    
    //Activity 2--Object Method
    //method to display title and author
    book.display=function(){
        console.log(book.title);
        console.log(book.author);}
    
    console.log(book.display());
    
    //method to update year
    book.update=function(year)
    {
    book.year=year;
    console.log(`Year of publication:${year}`);
    }
    book.update(2022);
    
    //Activity 3--Nested Object
    const library={
        name:"Kaisher Library",
        books: [
            {
                title: "The Great Gatsby",
                author: "F. Scott Fitzgerald",
                isbn: "9780743273565",
                available: true
            },
            {
                title: "To Kill a Mockingbird",
                author: "Harper Lee",
                isbn: "9780060935467",
                available: false
            },
            {
                title: "1984",
                author: "George Orwell",
                isbn: "9780451524935",
                available: true
            }
        ]
    }
    console.log(library);
    console.log(library.name);
    
    //print title of book 
     for(let i of library.books)
     {
    console.log(i.title);
     }
    
    //Activity 5--Object iteration
    
    
     for(let key in book)
     {
    
    console.log(`${key}=${book[key]}`);
     }
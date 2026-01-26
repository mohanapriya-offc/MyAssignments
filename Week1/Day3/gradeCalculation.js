let score=85
switch(true)
{
    case(score>=90) :
        console.log("GRADE A")
        break

    case(score>=80 && score<=89) :
        console.log("GRADE B")
        break

    case(score>=70 && score<=79) :
        console.log("GRADE C")
        break

    case(score>=60 && score<=69) :
        console.log("GRADE D")
        break
   
    default:
    console.log("GRADE F")
}
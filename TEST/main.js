for (let i = 0; i <= 4; i++) {
    switch (i) {
        case 1:
            let question1 = +prompt('2+2=?  1)3  2)4  3)8  4)9 ')


            switch (question1) {
                case 2:
                    alert("CHECK!!!")
                    break;
                default:
                    alert("MISTAKE!!!")
                    i--;
                    break;
            }
            break;

        case 2:
            let question2 = +prompt('2+3=?  1)3  2)4  3)5  4)9 ')


            switch (question2) {
                case 3:
                    alert("CHECK!!!")
                    break;
                default:
                    alert("MISTAKE!!!")
                    i--;
                    break;
            }
            break;

            
                case 3:
                    let question3 = +prompt('3+3=?  1)6  2)4  3)5  4)9 ')


                    switch (question3) {
                        case 1:
                            alert("CHECK!!!")
                            break;
                        default:
                            alert("MISTAKE!!!")
                            i--;
                            break;
                    }
                    break;
            
    }
}
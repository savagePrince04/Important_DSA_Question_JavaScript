const curryAdd = (sum) => {
    	return (a) => {
            return (b) => {
                return (c) => {
                    return sum(a+b+c);
                }
            }
        }
    }
    const addition = curryAdd(add);
    
    console.log(addition(1))
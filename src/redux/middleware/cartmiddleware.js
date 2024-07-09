export const savestate = (state) => {
    try{
        const serializestate = JSON.stringify(state);
        localStorage.setItem('cart', serializestate);
    }
    catch (error) {
        console.error('could not save state', error);
    }
};

export const loadstate = () => {
    try{
        const serializestate = localStorage.getItem('cart');
        if(serializestate === null){
            return undefined;
        }
        return JSON.parse(serializestate);
    }
    catch(error){
        console.error('Could not load state', error);
    }
};
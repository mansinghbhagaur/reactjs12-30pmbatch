export const reducer = (state, action) => {
      console.log(action.payload)
      switch (action.type) {
            case 'INCREMENT': return { count: state.count + 1 };
            case 'DECREMENT': return { count: state.count - 1 };
            case 'RESET': return { count: 0 };
            default: return state;
      }
}
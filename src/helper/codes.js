export const interactionsCode = {
    ctp1: `
    const ComposantEnfant = ({ onButtonClick }) =>{
        return <Button onClick={()=> onButtonClick() }>Cliquez ici</Button>
    }
    `,
    ctp2: `
    const ComposantParent = () =>{
        const handleButtonClick = () => console.log("Boutton cliqué")
        return <Stack>
            <ComposantEnfant onButtonClick={()=> handleButtonClick() } />
        </Stack>
    }
    `,
    ctp3: `
    const ComposantEnfant = ({ onValuesChange }) =>{
        const [ myState1, setMyState1 ] = useState('')
        const [ myState2, setMyState2 ] = useState('')
    
        useEffect(()=>{ onValuesChange(myState1, myState2) }, [myState1, myState2])
        return (<>
            <OutlinedInput onChange={e => setMyState1(e.target.value)}/>
            <OutlinedInput onChange={e => setMyState2(e.target.value)}/>
        </>)
    }
    `,
    ctp4: `
    const ComposantParent = () =>{
        const handleInputChange = (ms1, ms2) => console.log("Changement de la valeur de myState1 ou myState2", ms1, ms2)
        return <Stack>
            <ComposantEnfant onValuesChange={(ms1, ms2)=> handleInputChange(ms1, ms2) } />
        </Stack>
    }
    `,
    ptc1: `
    const ComposantParent = () =>{
        const [ myState1, setMyState1 ] = useState(0)
        return <Stack>
            <Button onClick={()=> setMyState1(value => value + 1)}>Click me</Button>
            <ComposantEnfant myState1={myState1}/>
            {/* Autres élements */}
        </Stack>
    }
    `,
    ptc2: `
    const ComposantEnfant = ({myState1}) =>{
        useEffect(()=>{ console.log("Changement de la valeur de myState1 ou myState1", myState1) }, [myState1])
        return <Stack>
            <Typography>{myState1}</Typography>
            {/* Autres élements */}
        </Stack>
    }
    `
}

export const usualFunctionsCode = {
    dm2: `
    const date1 = moment('2022-01-23')
    const date2 = moment('2023-12-31')
    const date3 = moment('2023-12-31 12:30:00')

    console.log(date1 > date2) // false
    console.log(date2 < date3) // true
    `, 
    inc1: `
    const myString = 'Collo del cibo'
  
    console.log(myString.includes('co')) // true
    console.log(myString.includes('ib')) // true
    console.log(myString.includes('cii')) // false
    console.log('Collo'.includes('i')) // false
    `,
    inc2: `
    const myArray = ['mango', 'banana', 'apple', 'strawberry']

    console.log(myArray.includes('mango')) // true
    console.log(myArray.includes('mang')) // false
    console.log(myArray.includes('peer')) // false
    console.log(['avocado', 'peer', 'kiwi'].includes('peer')) // true
    `
}

export const reduxUseCode = {
    inst: `
    npm install @reduxjs/toolkit react-redux
    `,
    actions11: `
    export const fetchFruits = () => {
        return async dispatch =>{
            try {
            const { data: { fruits } } = await getFruits()
            dispatch({ type: "FETCH_FRUITS", payload: fruits})
            } catch (error) { console.log(error.response) }
        }
    }

    export const fetchVegetables = () => {
        return async dispatch =>{
            try {
            const { data: { vegetables } } = await getVegetables()
            dispatch({ type: "FETCH_VEGETABLES", payload: vegetables})
            } catch (error) { console.log(error.response) }
        }
    }

    // Autres
    `,
    actions12: `
    const getFruits = async () =>{ return await axios.get('/api/list/fruits') }
    const getVegetables = async () =>{ return await axios.get('/api/list/vegetables') }
    // Autres 
    `,
    reducer1: `
    const initialState = {
        fruits: [],  
        vegetables: []
        
        // Autres
    }
    
    const reducer = (state = initialState, action) => {
        const { type, payload } = action
        switch (type) {
            case "FETCH_FRUITS": return {...state, fruits: payload }
            case "FETCH_VEGETABLES": return {...state, vegetables: payload }
            // Autres
            default: return state;
        }
    }
    export default reducer
    `,
    store: `
    import { configureStore } from "@reduxjs/toolkit";
    import reducer from "./reducer";

    const store = configureStore({ reducer: reducer })
    export default store
    `,
    store2: `
    import store from './app/store'
    import { Provider } from 'react-redux'

    ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
    )
    `,
    comp1: `
    import { useSelector, useDispatch } from "react-redux"

    const FruitsList = () =>{
        const fruits = useSelector(state => state.fruits)
        return fruits.map(/*  */)
    }
    `,
    comp2: `
    const dispatch = useDispatch()
    useEffect(() => {
        // Modification
        dispatch(fetchFruits())
    }, [])
    `,
    actions2: `
    export const fetchFruits = () => {
        return async dispatch =>{
            dispatch({ type: "FETCH_FRUITS_START" })
            try {
                const { data: { fruits } } = await getFruits()
                dispatch({ type: "FETCH_FRUITS_SUCCESS", payload: fruits})
            } catch (error) { dispatch({ type: "FETCH_FRUITS_FAIL" }) }

        }
    }
    // Autres
    `,
    reducer2: `
    const initialState = {
        fruits: [],
        fruitsLoading: false,
        fruitsError: false,
        // Autres 
    }

    const reducer = (state = initialState, action) => {
        const { type, payload } = action
        switch (type) {
            case "FETCH_FRUITS_START":
            return {...state, fruits: [], fruitsLoading: true, fruitsError: false }
            case "FETCH_FRUITS_FAIL":
            return {...state, fruits: [], fruitsLoading: false, fruitsError: true }
            case "FETCH_FRUITS_SUCCESS":
            return { ...state, fruits: payload, fruitsLoading: false, menusError: false };
        
            default: return state;
        }
      } 
    export default reducer  
    `
}

export const listFilterCode = {
    lf1: `
    const filteredList = initialList.filter(item => /* boolean expression */)
    `,
    lf2: `
    const fruits = [
        { name: "Apple", isGreen: true, rating: 8.5 },
        { name: "Strawberry", isGreen: false, rating: 6.33 },
        { name: "Banana", isGreen: false, rating: 4.25 },
        { name: "Avocado", isGreen: true, rating: 5.5 },
        { name: "Peer", isGreen: true, rating: 6 },
    ]
    
    const notGreenFruits = fruits.filter(f => !f.isGreen)
    console.log(notGreenFruits)
    /*[
        { name: "Strawberry", isGreen: false, rating: 6.33 },
        { name: "Banana", isGreen: false, rating: 4.25 },
    ]*/
    `,
    lf3: `
    const goodGreenFruitsStartingWithPe = fruits.filter(f => f.isGreen && (f.rating >= 6) && (f.name?.startsWith("Pe")))
    console.log(goodGreenFruitsStartingWithPe)
    /*[
        { name: "Peer", isGreen: true, rating: 6 },
    ]*/
    `
}

export const multiLanguageCode = {
    ml1: `
    const text = {
        fr: { 
            greet: "Salut",
            french: "Français",
            english: "Anglais",        
        },
        en: {
            greet: "Hi",
            french: "French",
            english: "English",    
        }
    }

    const getText = lang => { return text[lang] }
    
    export default getText
    `,
    ml2: `
    const langkey = 'LANG-KEY'
    const useLanguage = () =>{
        const language = localStorage.getItem(langkey) || 'fr'
        const text = getText(language)

        const changeLanguage = l => {
            localStorage.setItem(langkey, l)
            window.location.reload()
        }
        return { text, language, changeLanguage }
    }
    export default useLanguage
    `,
    ml3: `
    const langkey = 'LANG-KEY'
    const useLanguage = () =>{
        const eventName = 'changeLanguage'
        const [language, setLanguage] = useState(localStorage.getItem(langkey) || 'fr')
        const text = getText(language)

        useEffect(()=>{
            window.addEventListener(eventName, e => { setLanguage(e.detail); localStorage.setItem(langkey, e.detail) })
            return () => window.removeEventListener(eventName, e => { setLanguage(e.detail); localStorage.setItem(langkey, e.detail) })
        }, [])
        const changeLanguage = l => {
            const e = new CustomEvent(eventName, {detail: l})
            window.dispatchEvent(e)
        }
        return { text, language, changeLanguage }
    }
    export default useLanguage
    `,
    ml4: `
    const App = () => {
        const { text } = useLanguage()
        return <Typography>{text.greet}</Typography> {/* Bonjour */}
    }
    export default App
    `,
    ml5: `
    const LanguageSwitcher = () => {
        const { text, changeLanguage } = useLanguage()
        return(<>
            <Button onClick={()=> changeLanguage('fr')}>{text.french}</Button>
            <Button onClick={()=> changeLanguage('en')}>{text.english}</Button>
        </>)
    }
    export default LanguageSwitcher
    `,
}
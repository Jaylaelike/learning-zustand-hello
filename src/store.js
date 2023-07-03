// import create from 'zustand'

// const counterStore = (set) => ({
//     count: 0,
//     increment: () => set((state) => ({ count: state.count + 1 })),
//     decrement: () => set((state) => ({ count: state.count - 1 }))
//   })

//   export const useCounterStore = create(counterStore)


// import create from 'zustand'
// import { persist } from 'zustand/middleware'

// const store = () => ({ myState: 0 })

// const useStore = create(persist(store))


//Reset Global state when re-render pages
// import { persist } from 'zustand/middleware'
// import create from 'zustand'

// const counterStore = (set) => ({
//     count: 0,
//     increment: () => set((state) => ({ count: state.count + 1 })),
//     decrement: () => set((state) => ({ count: state.count - 1 }))
// })
// export const useCounterStore = create(counterStore)


import { persist } from 'zustand/middleware'
import create from 'zustand'

//Keep Global state when re-render pages
export const useCounterStore = create(
    persist(
        (set) => ({
            count: 0,
            increment: () => set((state) => ({ count: state.count + 1 })),
            decrement: () => set((state) => ({ count: state.count - 1 }))
        }),
        {
            name: 'food-storage',
        }
    )
)





const themeStore = persist(
    (set) => ({
        color: '#222',
        backgroundColor: '#ff0000',
        setColor: (color) => set(() => ({ color })),
        setBackgroundColor: (color) => set(() => ({ backgroundColor: color }))
    }),
    { name: 'my-theme' }
)

export const useThemeStore = create(themeStore)

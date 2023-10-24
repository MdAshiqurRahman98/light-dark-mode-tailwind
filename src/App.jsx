import { useTheme } from "./customHook/useTheme";
import { BsSun, BsMoon } from 'react-icons/bs';

function App() {
  const { changeTheme, mode } = useTheme();

  return (
    <div className="max-w-screen-xl mx-auto min-h-screen px-3 md:px-3 lg:px-5 py-3 mb-7">
      <span onClick={changeTheme} className="text-xl flex justify-end">
        {
          mode === 'dark' ? <BsSun className="text-white"></BsSun> : <BsMoon className="text-black"></BsMoon>
        }
      </span>
      <div className="grid place-items-center">
        <h1 className="mt-10 mb-11 font-bold text-center text-7xl dark:text-zinc-300">Md Ashiqur Rahman</h1>
        <div className="p-5 w-[500px] h-[300px] bg-zinc-100 dark:bg-zinc-700 dark:rounded-md">
          <p className="text-justify dark:text-zinc-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident explicabo, ducimus obcaecati quisquam amet adipisci, porro sapiente rerum mollitia, odio ullam. Laudantium molestiae corporis labore earum nobis voluptas blanditiis, quam maiores ea perspiciatis ipsum aliquid dolorem excepturi perferendis non. Ullam aut officiis debitis incidunt neque laboriosam doloribus odit impedit temporibus praesentium, dicta minus, amet esse labore. Molestias, odit perferendis labore esse recusandae tempore reiciendis asperiores quibusdam placeat saepe! Deserunt, vitae!</p>
        </div>
      </div>
    </div>
  )
}

export default App;
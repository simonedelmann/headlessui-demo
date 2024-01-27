import { Listbox, ListboxOption } from './Listbox'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 relative">
        <Listbox name="status" defaultValue="active">
          <ListboxOption value="active">
            Click me
          </ListboxOption>
          <ListboxOption value="paused">
            Paused
          </ListboxOption>
          <ListboxOption value="delayed">
            Delayed
          </ListboxOption>
          <ListboxOption value="canceled">
            Canceled
          </ListboxOption>
        </Listbox>
      </div>
    </div>
  )
}

export default App

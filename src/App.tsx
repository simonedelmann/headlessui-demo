import { Listbox, ListboxOption, ListboxLabel } from './Listbox'

function App() {
  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center">
      <div className="bg-white p-8 relative">
      <Listbox name="status" defaultValue="active">
        <ListboxOption value="active">
          <ListboxLabel>Active</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="paused">
          <ListboxLabel>Paused</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="delayed">
          <ListboxLabel>Delayed</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="canceled">
          <ListboxLabel>Canceled</ListboxLabel>
        </ListboxOption>
      </Listbox>
      </div>
    </div>
  )
}

export default App

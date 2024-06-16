import { CopyIcon } from "@/components/icons/CopyIcon"
import { TrashIcon } from "@/components/icons/TrashIcon"

const ListPasswords = ({ passwords, deletedPassword, handleCopy, textRef }) => {
  if (passwords.length === 0) {
    return (
      <p className="text-yellow-500 font-bold text-center my-5">No hay contraseñas guardadas.</p>
    )
  }

  return (
    <ul
      className="bg-blue-light flex flex-col gap-1 max-h-52"
      style={{
        overflowY: "scroll",
        scrollbarColor: "#2463eb transparent",
        scrollbarWidth: "thin",
      }}
    >
      {passwords.map(({ password, name, id }, index) => (
        <li
          className="flex w-full gap-2 justify-center text-black p-2 rounded-md text-center"
          key={id}
        >
          <p className="text-yellow-500 font-bold">{name}:</p>
          <div className="flex items-center gap-2">
            <p ref={
              element => textRef.current[index] = element || ''
            }>
              {password}
            </p>
            <button onClick={() => handleCopy(index)}>
              <CopyIcon className="w-7 h-7 text-black hover:text-yellow-500" />
            </button>
            <button onClick={() => deletedPassword(id)}>
              <TrashIcon className="w-7 h-7 text-transparent transition-all duration-300 ease-in-out hover:scale-105" color="red" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export const PasswordsContainer = ({
  passwords,
  deletedPassword,
  handleCopy,
  textRef
}) => (
  <ListPasswords
    passwords={passwords}
    deletedPassword={deletedPassword}
    handleCopy={handleCopy}
    textRef={textRef}
  />
)

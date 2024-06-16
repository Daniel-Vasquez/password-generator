export const Form = ({
  length,
  setLength,
  includeNumbers,
  setIncludeNumbers,
  includeSpecial,
  setIncludeSpecial,
  newPasswordName,
  setNewPasswordName,
  savePassword
}) => {
  return (
    <div className="bg-white rounded-lg px-11 py-7 flex flex-col items-center gap-2">
      <h1 className="text-yellow-500 text-3xl font-bold text-center mb-7">Generador de Contraseñas</h1>
      <div className="text-center">
        <p className="font-semibold text-xl text-black mb-3">Longitud de la Contraseña:</p>
        <div className="w-32 m-auto py-2 px-3 border border-gray-200 rounded-lg" data-hs-input-number="">
          <div className="w-full flex justify-between items-center gap-x-3">
            <input
              className="w-full p-0 bg-transparent border-0 text-black focus:ring-0"
              type="text"
              value={length}
              min={8}
              max={25}
              readOnly
            />
            <div className="flex justify-end items-center gap-x-1.5">
              <button
                type="button"
                className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                data-hs-input-number-decrement=""
                onClick={(e) => setLength(length - 1)}
                disabled={length <= 8}
              >
                <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                </svg>
              </button>
              <button
                type="button"
                className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                data-hs-input-number-increment=""
                onClick={(e) => setLength(length + 1)}
                disabled={length >= 25}
              >
                <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="flex items-center min-h-[1.5rem] ps-[1.5rem]">
        <input
          className="relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-black checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-black checked:focus:after:bg-transparent rtl:float-right"
          type="checkbox"
          checked={includeNumbers}
          onChange={(e) => setIncludeNumbers(e.target.checked)}
          name="checkNumbers"
        />
        <label
          className="text-black inline-block ps-[0.15rem] hover:cursor-pointer"
          htmlFor="checkNumbers"
        >
          Include Números
        </label>
      </div>

      <div className="flex items-center min-h-[1.5rem] ps-[1.5rem]">
        <input
          className="relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-black checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-black checked:focus:after:bg-transparent rtl:float-right"
          type="checkbox"
          checked={includeSpecial}
          onChange={(e) => setIncludeSpecial(e.target.checked)}
          name="checkSpecial"
        />
        <label
          className="text-black inline-block ps-[0.15rem] hover:cursor-pointer"
          htmlFor="checkSpecial"
        >
          Incluir Caracteres Especiales
        </label>
      </div>

      <label className="text-black font-bold mb-2 text-xl text-center">
        Nombre de la Contraseña:
        <input
          className="bg-transparent text-center border border-gray-200 peer block min-h-[auto] w-full rounded px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
          type="text"
          value={newPasswordName}
          onChange={(e) => setNewPasswordName(e.target.value)}
          required
        />
      </label>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50 disabled:cursor-no-drop"
        onClick={savePassword}
        disabled={!newPasswordName}
      >
        Generar y Guardar
      </button>
    </div>
  )
}

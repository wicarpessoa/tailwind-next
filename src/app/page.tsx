import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import * as Input from './components/Input'
import { SettingsTab } from './components/SettingsTabs'
import * as FileInput from './components/Form/FileInput'
import { Select } from './components/Form/Select'
import { SelectItem } from './components/Form/Select/SelectItem'
import { TextArea } from './components/TextArea'
export default function Home() {
  return (
    <>
      <h1 className="txt-zinc-900 text-3xl font-medium">Settings</h1>
      <SettingsTab />

      <div className="mt-6 flex flex-col ">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 ">
              Personal info
            </h2>
            <span className="text-sm text-zinc-500">
              Update your photo personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm outline-none hover:bg-zinc-50 focus:border-violet-300 focus:ring-4 focus:ring-violet-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm outline-none hover:bg-violet-700 focus:border-violet-300 focus:ring-4 focus:ring-violet-100"
            >
              Save
            </button>
          </div>
        </div>
        <form
          id="settings"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          {/* name input */}
          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Wicar" />
              </Input.Root>
              <Input.Root>
                <Input.Control id="lastName" defaultValue="Pessoa" />
              </Input.Root>
            </div>
            <div />
          </div>
          {/* email input */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Email address
            </label>
            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control id="email" defaultValue="Wicarpp@gmail.com" />
            </Input.Root>
            <div />
          </div>
          {/* photo input */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile
              </span>
            </label>
            <div>
              <FileInput.Root className="flex items-start gap-5">
                <FileInput.ImgPreview />
                <FileInput.Trigger></FileInput.Trigger>
                <FileInput.Control accept="image/png, image/jpeg" />
              </FileInput.Root>
            </div>
            <div />
          </div>
          {/* role input */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>
            <Input.Root>
              <Input.Control id="role" defaultValue="dev" />
            </Input.Root>
            <div />
          </div>
          {/* country input */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>
            <Select placeholder="select a country...">
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="us" text="United States" />
              <SelectItem value="mex" text="Mexico" />
            </Select>
            <div />
          </div>
          {/* timezone input */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>
            <Select placeholder="select a timezone...">
              <SelectItem
                value="utc8"
                text="Pacific Standard Time (UTC-08:00)"
              />
              <SelectItem value="utc3" text="America São Paulo (UTC-03:00)" />
            </Select>
            <div />
          </div>

          {/* bio input */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction
              </span>
            </label>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem
                    value="normal"
                    defaultChecked
                    text="Normal Text"
                  />
                </Select>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    className=" rounded-md p-2 outline-none hover:bg-zinc-50 focus:border-violet-300 focus:ring-4 focus:ring-violet-100"
                  >
                    <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className=" rounded-md p-2 outline-none hover:bg-zinc-50 focus:border-violet-300 focus:ring-4 focus:ring-violet-100"
                  >
                    <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className=" rounded-md p-2 outline-none hover:bg-zinc-50 focus:border-violet-300 focus:ring-4 focus:ring-violet-100"
                  >
                    <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className=" rounded-md p-2 outline-none hover:bg-zinc-50 focus:border-violet-300 focus:ring-4 focus:ring-violet-100"
                  >
                    <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className=" rounded-md p-2 outline-none hover:bg-zinc-50 focus:border-violet-300 focus:ring-4 focus:ring-violet-100"
                  >
                    <ListOrdered
                      className="h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </button>
                </div>
              </div>
              <TextArea defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development." />
            </div>
          </div>

          {/* Portfolio input */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="projects"
              className="text-sm font-medium text-zinc-700"
            >
              Portifolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work
              </span>
            </label>
            <FileInput.Root className="">
              <FileInput.Trigger></FileInput.Trigger>
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm outline-none hover:bg-zinc-50 focus:border-violet-300 focus:ring-4 focus:ring-violet-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm outline-none hover:bg-violet-700 focus:border-violet-300 focus:ring-4 focus:ring-violet-100"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

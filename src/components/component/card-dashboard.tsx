
import { Button } from "@/components/ui/button"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"

export function CardDashboard() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
      <h1 className="text-2xl font-bold mb-6 md:text-3xl">Dashboard</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-bold mb-4">Fechas</h2>
          <div className="flex items-center gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button className="flex-col items-start w-full h-auto" variant="outline">
                  <span className="font-semibold uppercase text-[0.65rem]">Inicio</span>
                  <span className="font-normal">4/2/2024</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0 max-w-[276px]">
                <Calendar />
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button className="flex-col items-start w-full h-auto" variant="outline">
                  <span className="font-semibold uppercase text-[0.65rem]">Fin</span>
                  <span className="font-normal">10/2/2024</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0 max-w-[276px]">
                <Calendar />
              </PopoverContent>
            </Popover>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <div className="text-gray-500 dark:text-gray-400">Total de pasajeros</div>
              <div className="font-semibold">1,234</div>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="text-gray-500 dark:text-gray-400">Total de dinero</div>
              <div className="font-semibold">$12,345.67</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-bold mb-4">Rutas</h2>
          <div className="flex items-center gap-4">
            <Select>
              <SelectTrigger className="h-auto">
                <SelectValue
                  placeholder={
                    <div className="flex flex-col items-start">
                      <span className="font-semibold uppercase text-[0.65rem]">Salida</span>
                      <span className="font-normal">Madrid</span>
                    </div>
                  }
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="madrid">Madrid</SelectItem>
                <SelectItem value="barcelona">Barcelona</SelectItem>
                <SelectItem value="valencia">Valencia</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="h-auto">
                <SelectValue
                  placeholder={
                    <div className="flex flex-col items-start">
                      <span className="font-semibold uppercase text-[0.65rem]">Llegada</span>
                      <span className="font-normal">Barcelona</span>
                    </div>
                  }
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="madrid">Madrid</SelectItem>
                <SelectItem value="barcelona">Barcelona</SelectItem>
                <SelectItem value="valencia">Valencia</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <div className="text-gray-500 dark:text-gray-400">Total de pasajeros</div>
              <div className="font-semibold">789</div>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="text-gray-500 dark:text-gray-400">Total de dinero</div>
              <div className="font-semibold">$7,890.12</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

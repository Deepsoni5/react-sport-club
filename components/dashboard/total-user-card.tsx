import { Card } from "@/components/ui/card";

export function TotalUserCard() {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between">
        <div className="text-xs text-gray-500">Total Users</div>
        <div className="text-xs text-gray-500">Return Users</div>
      </div>

      <div className="flex items-center justify-between mt-2">
        <div className="text-xl font-bold text-indigo-600">15,000</div>
        <div className="text-xl font-bold text-green-500">5,588</div>
      </div>

      <div className="mt-4">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-100">
                Users
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-gray-200">
            <div
              style={{ width: "60%" }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600"
            ></div>
            <div
              style={{ width: "40%" }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
            ></div>
          </div>
        </div>
      </div>
    </Card>
  );
}

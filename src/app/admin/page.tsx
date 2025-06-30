import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, PlayCircle, TrendingUp } from "lucide-react"

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Courses",
      value: "24",
      description: "+2 from last month",
      icon: BookOpen,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Active Students",
      value: "1,234",
      description: "+12% from last month",
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Total Lectures",
      value: "156",
      description: "+8 from last week",
      icon: PlayCircle,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      title: "Completion Rate",
      value: "87%",
      description: "+5% from last month",
      icon: TrendingUp,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here&apos;s what&apos;s happening with your LMS.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <p className="text-xs text-gray-600 mt-1">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Courses</CardTitle>
            <CardDescription>Latest courses added to the platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "React Fundamentals", students: 45, status: "Active" },
                { title: "Node.js Backend", students: 32, status: "Active" },
                { title: "UI/UX Design", students: 28, status: "Draft" },
                { title: "Python Basics", students: 67, status: "Active" },
              ].map((course, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{course.title}</p>
                    <p className="text-sm text-gray-600">{course.students} students</p>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      course.status === "Active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {course.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Student Activity</CardTitle>
            <CardDescription>Recent student enrollments and completions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "John Doe", action: "Completed React Fundamentals", time: "2 hours ago" },
                { name: "Jane Smith", action: "Enrolled in UI/UX Design", time: "4 hours ago" },
                { name: "Mike Johnson", action: "Started Node.js Backend", time: "6 hours ago" },
                { name: "Sarah Wilson", action: "Completed Python Basics", time: "1 day ago" },
              ].map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-blue-600">
                      {activity.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{activity.name}</p>
                    <p className="text-sm text-gray-600">{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

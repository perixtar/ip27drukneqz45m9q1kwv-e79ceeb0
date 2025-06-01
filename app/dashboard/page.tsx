import { Card } from '@/components/ui/card';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome to your dashboard overview</p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="p-6">
          <h3 className="text-sm font-medium text-gray-500">Total Users</h3>
          <p className="text-2xl font-bold">1,234</p>
          <div className="text-green-600 text-sm">↑ 12% from last month</div>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-sm font-medium text-gray-500">Revenue</h3>
          <p className="text-2xl font-bold">$12,345</p>
          <div className="text-green-600 text-sm">↑ 8% from last month</div>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-sm font-medium text-gray-500">Active Projects</h3>
          <p className="text-2xl font-bold">23</p>
          <div className="text-yellow-600 text-sm">→ No change</div>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-sm font-medium text-gray-500">Tasks Complete</h3>
          <p className="text-2xl font-bold">89%</p>
          <div className="text-green-600 text-sm">↑ 5% from last week</div>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center space-x-4 border-b pb-4">
                <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                <div>
                  <p className="font-medium">Activity {item}</p>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            {['Create Project', 'Add User', 'Generate Report', 'View Settings'].map((action) => (
              <button
                key={action}
                className="p-4 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <p className="font-medium">{action}</p>
                <p className="text-sm text-gray-500">Click to proceed</p>
              </button>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
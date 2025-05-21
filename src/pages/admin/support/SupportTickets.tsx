import React from 'react';
import { MessageSquare, AlertCircle, CheckCircle, Clock } from 'lucide-react';

export default function SupportTickets() {
  const tickets = [
    {
      id: 1,
      title: 'Problema com pagamento',
      user: 'João Silva',
      userType: 'student',
      status: 'open',
      priority: 'high',
      created: '2024-03-15',
    },
    {
      id: 2,
      title: 'Dúvida sobre upload de curso',
      user: 'Maria Santos',
      userType: 'seller',
      status: 'in_progress',
      priority: 'medium',
      created: '2024-03-14',
    },
    // Add more tickets
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open':
        return 'bg-red-100 text-red-800';
      case 'in_progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'resolved':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      case 'medium':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'low':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Tickets de Suporte</h2>
        <button className="bg-[#2B580C] text-white px-4 py-2 rounded-lg hover:bg-[#1A3B06] transition-colors">
          Novo Ticket
        </button>
      </div>

      {/* Tickets List */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Título
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Usuário
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tipo
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Prioridade
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Data
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tickets.map((ticket) => (
                <tr key={ticket.id}>
                  <td className="px-6 py-4 whitespace-nowrap">#{ticket.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{ticket.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{ticket.user}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        ticket.userType === 'seller'
                          ? 'bg-purple-100 text-purple-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {ticket.userType === 'seller' ? 'Vendedor' : 'Aluno'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${getStatusColor(
                        ticket.status
                      )}`}
                    >
                      {ticket.status === 'open'
                        ? 'Aberto'
                        : ticket.status === 'in_progress'
                        ? 'Em Progresso'
                        : 'Resolvido'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getPriorityIcon(ticket.priority)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{ticket.created}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-[#2B580C] hover:text-[#1A3B06]">
                      <MessageSquare className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
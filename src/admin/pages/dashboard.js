import { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Dashboard = () => {
    const {allusers} = useSelector((state) => state.auth);
    const {allorder} = useSelector((state) => state.order);
    const [filterdata , setfilterdata] = useState({torder:0, tuser:0, morder:0, muser:0});

    // Get current IST date
    const getISTDate = () => {
      const now = new Date();
      const istOffset = 5.5 * 60 * 60 * 1000; 
      return new Date(now.getTime() + istOffset);
    };
    
    // Update filter data on component mount or when data changes
    useEffect(() => {
      const today = getISTDate();
      const currentMonth = today.getMonth(); 
      const currentYear = today.getFullYear();

      // Calculate today's data
      const torder = allorder.filter(order => {
          const orderDate = new Date(order.createdAt);
          return orderDate.toISOString().split('T')[0] === today.toISOString().split('T')[0];
      }).length;

      const tuser = allusers.filter(user => {
          const userDate = new Date(user.createdAt);
          return userDate.toISOString().split('T')[0] === today.toISOString().split('T')[0];
      }).length;

      // Calculate monthly data
      const morder = allorder.filter(order => {
          const orderDate = new Date(order.createdAt);
          return orderDate.getMonth() === currentMonth && orderDate.getFullYear() === currentYear;
      }).length;

      const muser = allusers.filter(user => {
          const userDate = new Date(user.createdAt);
          return userDate.getMonth() === currentMonth && userDate.getFullYear() === currentYear;
      }).length;

      setfilterdata(prevState => ({
            ...prevState,
            torder,
            tuser,
            morder,
            muser
        }));       

    },[allusers, allorder])

    

    return (
        <Container fluid>
        <Row className="m-4">
            <Col xs={12} md={6} className="my-3">
              <Card className="text-white" style={{ backgroundColor: '#007bff', borderRadius: '10px' }}>
                <Card.Body>
                  <Card.Title>Today Orders</Card.Title>
                  <Card.Text style={{ fontSize: '1.5rem' }}>{filterdata.torder}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} className="my-3">
              <Card className="text-white" style={{ backgroundColor: '#28a745', borderRadius: '10px' }}>
                <Card.Body>
                  <Card.Title>Today Users</Card.Title>
                  <Card.Text style={{ fontSize: '1.5rem' }}>{filterdata.tuser}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} className="my-3">
              <Card className="text-white" style={{ backgroundColor: '#007bff', borderRadius: '10px' }}>
                <Card.Body>
                  <Card.Title>Current Month order</Card.Title>
                  <Card.Text style={{ fontSize: '1.5rem' }}>{filterdata.morder}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} className="my-3">
              <Card className="text-white" style={{ backgroundColor: '#28a745', borderRadius: '10px' }}>
                <Card.Body>
                  <Card.Title>Current Month Users</Card.Title>
                  <Card.Text style={{ fontSize: '1.5rem' }}>{filterdata.muser}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} className="my-3">
              <Card className="text-white" style={{ backgroundColor: '#007bff', borderRadius: '10px' }}>
                <Card.Body>
                  <Card.Title>Total Orders</Card.Title>
                  <Card.Text style={{ fontSize: '1.5rem' }}>{allorder.length}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} className="my-3">
              <Card className="text-white" style={{ backgroundColor: '#28a745', borderRadius: '10px' }}>
                <Card.Body>
                  <Card.Title>Total Users</Card.Title>
                  <Card.Text style={{ fontSize: '1.5rem' }}>{allusers.length}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        
    )
};

export default Dashboard;
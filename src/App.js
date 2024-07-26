import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';

function App() {
  const[setRole] = useState('dev');
  const[employees, setEmployees] = useState(
    [
      {
        id: 1,
        name: "Matt Boneo", 
        role: "Developer", 
        img: "https://scontent.fmnl25-3.fna.fbcdn.net/v/t39.30808-6/357737218_1696117677480462_3329789873805965179_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=hHbi-V2v2kEQ7kNvgGjUg9-&_nc_ht=scontent.fmnl25-3.fna&oh=00_AYBc79GPob563-9kRgbsknbEie-QMOpmAyQVD3QYvsdhEQ&oe=66A406E0"
      },
      {
        id: 2,
        name: "Luffy", 
        role: "Captain", 
        img: "https://m.supergeek.cl/noticias/site/artic/20230806/imag/foto_0000000420230806004515/nuffyy.jpg"
      },
      {
        id: 3,
        name: "Zoro", 
        role: "Swordsman", 
        img: "https://wallpapers-clan.com/wp-content/uploads/2024/02/one-piece-roronoa-zoro-with-sword-turquoise-desktop-wallpaper-preview.jpg"
      },
      {
        id: 4,
        name: "Nami", 
        role: "Navigator", 
        img: "https://wallpapers-clan.com/wp-content/uploads/2024/04/one-piece-nami-on-beach-desktop-wallpaper-preview.jpg"
      },
      {
        id: 5,
        name: "Robin", 
        role: "Archaeologist", 
        img: "https://wallpapers-clan.com/wp-content/uploads/2024/04/one-piece-nico-robin-desktop-wallpaper-preview.jpg"
      },
      {
        id: 6,
        name: "Sanji", 
        role: "Cook", 
        img: "https://wallpapers-clan.com/wp-content/uploads/2024/04/sanji-smoking-one-piece-desktop-wallpaper-preview.jpg"
      },

    ]);

    function updateEmployee(id, newName, newRole) {
      const updateEmployees = employees.map((employee) => {
        if (id === employee.id){
          return{ ...employee, name: newName, role: newRole };
        }

        return employee;
      });
      setEmployees(updateEmployees);
    }

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name, 
      role: role,
      img: img,
    }
    setEmployees([... employees, newEmployee])
  }

  const showEmployees = true; 
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input 
            type="text" 
            onChange={(e) => {
            setRole(e.target.value);
             }}
          />
    <div className= "flex flex-wrap justify-center">
      {employees.map((employee) => { 
        const editEmployee = (
          <EditEmployee 
            id={employee.id}
            name={employee.name} 
            role={employee.role} 
            updateEmployee={updateEmployee} 
          />
        );
        return(
          <Employee 
            key={employee.id}
            id={employee.id}
            name={employee.name} 
            role={employee.role} 
            img={employee.img}
            editEmployee={editEmployee} 
          />
        );
      })}
    </div>

       <AddEmployee newEmployee={newEmployee} />

        </>

      ) : (
      <p>You cannot see the employees</p>
      )}

    </div>
  );
}

export default App;

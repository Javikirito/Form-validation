$(document).ready(function(){
    $("#nwarning").hide()
    $("#pwarning").hide()
    $("#cwarning").hide()
    $("#ewarning").hide()
    $("#dwarning").hide()
});

$(function(){
    $("#name").keyup(function(){
        var name = $("#name").val();
        var Digit = /^[A-Za-z]+$/;
        if( Digit.test(name) && name.length>=3 ){
            $("#nwarning").hide()
            return true;
        }
        else{
            $("#nwarning").show()
            return false;
        }
    });
});
// click on name validation
$(function(){
    $("#btnSubmit").click(function(){
        var name = $("#name").val();
        var Digit = /^[A-Za-z]+$/;
        if( Digit.test(name) && name.length>=3 ){
            $("#nwarning").hide()
            return true;
        }
        else{
            $("#nwarning").show()
            return false;
        }  
    });
});

$(function(){
    $("#email").keyup(function(){
        var email = $("#email").val();
        var valid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if( valid.test(email)){
            $("#ewarning").hide()
            return true;
        }
        else{
            $("#ewarning").show();
            return false;
        }
    });
});

$(function(){
    $("#btnSubmit").click(function(){
        var email = $("#email").val();
        var valid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if( valid.test(email)){
            $("#ewarning").hide()
            return true;
        }
        else{
            $("#ewarning").show();
            return false;
        }
    });
});


$(document).ready(function () {
    $('#DateOfBirth').change(function () {
        var userinput=$("#DateOfBirth").val();
        var dob=new Date(userinput);
        var now = new Date();   //Current Date
        var past = new Date($('#DateOfBirth').val());  //Date of Birth
        if (past > now) {
            $("#dwarning").show()
            $("#Age").val('')
            return false;
        }
        else{
            $("#dwarning").hide()
            var month_diff=Date.now()-dob.getTime();
            var age_dt=new Date(month_diff);
            var year=age_dt.getUTCFullYear();
            var age=Math.abs(year-1970);
            $('#Age').val(age);
            return true;
        }
        
    })
});
    

// click on date function
    $(document).ready(function () {
        $('#btnSubmit').click(function () {
            var userinput=$("#DateOfBirth").val();
            var dob=new Date(userinput);
            var now = new Date();   //Current Date
            var past = new Date($('#DateOfBirth').val());  //Date of Birth
            if (past > now) {
                $("#dwarning").show()
                $("#Age").val('')
                return false;
            }
            else{
                $("#dwarning").hide()
                var month_diff=Date.now()-dob.getTime();
                var age_dt=new Date(month_diff);
                var year=age_dt.getUTCFullYear();
                var age=Math.abs(year-1970);
                $('#Age').val(age);
                return true;
            }
            
        })
    });
    

    $(function(){
        $("#txtPassword").keyup(function () {
            var password = $("#txtPassword").val();
            var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^!~&*]).{8,20}$/;
            if( password !== '' && pattern.test(password)){
                $("#pwarning").hide();
                return true;
            }
            else{
                $("#pwarning").show();
                return false;
            }
    
        });
    });
// click on password validation
    $(function(){
        $("#btnSubmit").click(function(){
            var password = $("#txtPassword").val();
            var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%!~^&*]).{8,20}$/;
            if( password !== '' && pattern.test(password)){
                $("#pwarning").hide();
                return true;
            }
            else{
                $("#pwarning").show();
                return false;
            }
    
        });
    });

  $(function () {
        $("#txtConfirmPassword").keyup(function () {
            var password = $("#txtPassword").val();
            var confirmPassword = $("#txtConfirmPassword").val();
            if (password != confirmPassword) {
                $("#cwarning").show();
                return false;
            }
            else{
                $("#cwarning").hide();
                return true;
            }
            
        });
    });
// click on password confirmation
    $(function(){
        $("#btnSubmit").click(function(){
            var password = $("#txtPassword").val();
            var confirmPassword = $("#txtConfirmPassword").val();
            if (password != confirmPassword) {
                $("#cwarning").show();
                return false;
            }
            else{
                $("#cwarning").hide();
                return true;
            }
            
        });
    });

    $(function(){
        pwd = $(this).val()
        $('#eye').click(function(){  
              if($(this).hasClass('fa-eye-slash')){
                $(this).removeClass('fa-eye-slash');
                $(this).addClass('fa-eye');
                $('#txtPassword').attr('type','text');
              }else{
                $(this).removeClass('fa-eye');
                $(this).addClass('fa-eye-slash');  
                $('#txtPassword').attr('type','password');
              }
          });
      });

      $(function(){
        pwd = $(this).val()
        $('#eyetwo').click(function(){  
              if($(this).hasClass('fa-eye-slash')){
                $(this).removeClass('fa-eye-slash');
                $(this).addClass('fa-eye');
                $('#txtConfirmPassword').attr('type','text');
              }else{
                $(this).removeClass('fa-eye');
                $(this).addClass('fa-eye-slash');  
                $('#txtConfirmPassword').attr('type','password');
              }
          });
      });


